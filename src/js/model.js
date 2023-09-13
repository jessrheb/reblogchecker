import { API_KEY, API_URL, POSTS_PER_PAGE } from './config.js';
import {
  URLTrimmer,
  blognameValidation,
  errorMessage,
  isNewFormat,
  postURLTrimmer,
  storageAvailable,
} from './helpers.js';

export const sessionData = {
  getBlogname() {
    return JSON.parse(sessionStorage.getItem(`CheckingFor`));
  },
  postRootID: '',
};

/* STEP 0.5: RETRIEVE BASIC BLOG INFORMATION */

export async function retrieveBlogBasics(blognameInput) {
  try {
    const blogname = blognameValidation(blognameInput);

    const response = await fetch(
      `${API_URL}${blogname}.tumblr.com/info?api_key=${API_KEY}`
    );

    if (response.status === 404)
      throw new Error(
        `${errorMessage.origin.retrieveBlogBasics} ${errorMessage.error.notFound.blogname}`
      );

    if (response.status === 429)
      throw new Error(
        `${errorMessage.origin.retrieveBlogBasics} ${errorMessage.error.limitExceeded} ${errorMessage.ending.generic}`
      );

    if (!response.ok)
      throw new Error(
        `${errorMessage.origin.retrieveBlogBasics} ${errorMessage.error.notOK} ${errorMessage.ending.generic}`
      );

    const infoBasics = await response.json();
    const blogUUID = infoBasics.response.blog.uuid;
    const totalPosts = infoBasics.response.blog.total_posts;

    return [blogname, blogUUID, totalPosts];
  } catch (error) {
    throw error;
  }
}

/* STEP 1: RETRIEVE AND STORE ALL POSTS'S ROOT IDS FROM PROVIDED BLOGNAME */

export async function retrieveBlogPosts([blogname, blogUUID, totalPosts]) {
  try {
    const requestPromises = [];

    for (let offset = 0; offset <= totalPosts; offset += POSTS_PER_PAGE) {
      requestPromises.push(
        await fetch(
          `${API_URL}${blogUUID}/posts?api_key=${API_KEY}&limit=${POSTS_PER_PAGE}&offset=${offset}&reblog_info=true`
        )
      );
    }

    const requestStatus = requestPromises.map((request) => request.status);

    if (requestStatus.includes(404))
      throw new Error(
        `${errorMessage.origin.retrieveBlogPosts} ${errorMessage.error.notFound.blogname} ${errorMessage.ending.specific}`
      );

    if (requestStatus.includes(429))
      throw new Error(
        `${errorMessage.origin.retrieveBlogPosts} ${errorMessage.error.limitExceeded} ${errorMessage.ending.specific}`
      );

    if (!requestStatus.every((status) => status === 200))
      throw new Error(
        `${errorMessage.origin.retrieveBlogPosts} ${errorMessage.error.notOK} ${errorMessage.ending.specific}`
      );

    const response = await Promise.all(
      requestPromises.map(async (response) => await response.json())
    );

    const postsInfo = response.flatMap((request) => {
      return request.response.posts.map((post) => {
        return {
          rootID: post.reblogged_root_id ?? post.id_string,
          postURL: post.post_url,
        };
      });
    });

    if (!storageAvailable('sessionStorage'))
      throw new Error(
        `Sorry! Seems like you don't have enough space in your session storage or it isn't altogether available in the browser you're using. Reblog Checker needs access to it in order to work.`
      );

    sessionStorage.setItem(`CheckingFor`, JSON.stringify(`${blogname}`));
    sessionStorage.setItem(`${blogname}PostsInfo`, JSON.stringify(postsInfo));

    console.log(
      `${blogname}'s posts root IDs and reblogs URLs retrieved and stored in ${blogname}PostsInfo!`
    );
  } catch (error) {
    throw error;
  }
}

/* STEP 2: EXTRACT CREDENTIALS (BLOGNAME, USER UUID, POST ID) FROM PROVIDED POST URL */

export async function extractPostCredentials(URL) {
  try {
    /* NEW URL FORMAT */

    if (isNewFormat(URL)) {
      const URLToTreat = URLTrimmer(URL).replace('/', ' ').split(' ');
      const [blogname, postID] = URLToTreat;

      /* INVALID POST URL ERROR TAKES PRECEDENCE OVER BLOG UUID NOT FOUND */

      if (!postID)
        throw new Error(
          `${errorMessage.origin.extractPostCredentials} ${errorMessage.error.notFound.postURL} ${errorMessage.error.noPostId}`
        );

      const [, blogUUID] = await retrieveBlogBasics(blogname);

      if (!blogUUID) return;

      if (postID.includes('/')) {
        const postIDClean = postURLTrimmer(postID, '/');
        return [blogname, blogUUID, postIDClean];
      }

      if (postID.includes('?')) {
        const postIDClean = postURLTrimmer(postID, '?');
        return [blogname, blogUUID, postIDClean];
      }
      return [blogname, blogUUID, postID];
    }

    /* OLD URL FORMAT */

    if (!isNewFormat(URL)) {
      const URLToTreat = URLTrimmer(URL).replace('post/', '').split(' ');
      const [blogname, postID] = URLToTreat;

      /* INVALID POST URL ERROR TAKES PRECEDENCE OVER BLOG UUID NOT FOUND */

      if (!postID)
        throw new Error(
          `${errorMessage.origin.extractPostCredentials} ${errorMessage.error.notFound.postURL} ${errorMessage.error.noPostId}`
        );

      const [, blogUUID] = await retrieveBlogBasics(blogname);

      if (!blogUUID) return;

      if (postID.includes('/')) {
        const postIDClean = postURLTrimmer(postID, '/');
        return [blogname, blogUUID, postIDClean];
      }

      if (postID.includes('?')) {
        const postIDClean = postURLTrimmer(postID, '?');
        return [blogname, blogUUID, postIDClean];
      }
      return [blogname, blogUUID, postID];
    }
    return;
  } catch (error) {
    throw error;
  }
}

/* STEP 3: LOOK INTO PROVIDED POST'S INFORMATION FOR POST ROOT ID */

export async function retrievePostRootID([, blogUUID, postID]) {
  try {
    const response = await fetch(
      `${API_URL}${blogUUID}/posts?api_key=${API_KEY}&id=${postID}&reblog_info=true`
    );

    if (response.status === 404)
      throw new Error(
        `${errorMessage.origin.retrievePostRootID} ${errorMessage.error.notFound.postURL} ${errorMessage.error.noRootId}`
      );

    if (response.status === 429)
      throw new Error(
        `${errorMessage.origin.retrievePostRootID} ${errorMessage.error.limitExceeded} ${errorMessage.ending.generic}`
      );

    if (!response.ok)
      throw new Error(
        `${errorMessage.origin.retrievePostRootID} ${errorMessage.error.notOK} ${errorMessage.ending.generic}`
      );

    const postInfo = await response.json();
    const rootID =
      postInfo.response.posts.at(0).reblogged_root_id ??
      postInfo.response.posts.at(0).id_string;

    return rootID;
  } catch (error) {
    throw error;
  }
}

/* STEP 4: PERFORM REBLOG CHECK BY COMPARING RETRIEVED POST'S ROOT ID WITH USER'S STORED ROOT IDS */

export function reblogCheck(blogname, postRootID) {
  const postsInfo = JSON.parse(sessionStorage.getItem(`${blogname}PostsInfo`));

  if (!postsInfo) return;

  const targetedPosts = postsInfo.filter((post) => post.rootID === postRootID);
  const numberOfInstances = targetedPosts.length;

  if (numberOfInstances) {
    const instancesURLs = targetedPosts.map((instance) => instance.postURL);
    return [numberOfInstances, instancesURLs];
  } else return;
}
