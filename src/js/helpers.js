/* ERROR MESSAGES GENERATOR */

export const errorMessage = {
  origin: {
    retrieveBlogBasics: 'Sorry, I was unable to get any blog credentials:',
    retrieveBlogPosts: 'Sorry, I was unable to get your blog posts:',
    extractPostCredentials: `Sorry, I was unable to find this post's ID:`,
    retrievePostRootID: `Sorry, I was unable to find this post's original ID:`,
    blognameValidation: 'Whoops! Unexpected format or spelling:',
  },
  error: {
    notFound: {
      blogname: `I couldn't get any information from the blogname you provided. If you're pretty sure it's spelled correctly, then make sure it's not hidden from people without an account too.`,
      postURL: `I couldn't get any information from the URL you provided.`,
    },
    limitExceeded: `Looks like we made too many requests to Tumblr in a short span of time.`,
    notOK: `Something weird happened, either on our own end or yours.`,
    noPostId: `Make sure you entered a valid post URL (E.g.: https://www.tumblr.com/blogname/123456789101112 or https://blogname.tumblr.com/post/123456789101112).`,
    noRootId: `Is the original poster's blog not hidden from people without an account and the post ID correct?`,
    unexpectedError: `Please check if you entered a valid blogname/URL in the appropriate field.`,
  },
  ending: {
    generic: `Try again a little later!`,
    specific: `Please either choose another blog to search or try again a little later.`,
  },
};

/* ACCOUNTING FOR AS MANY USER INPUT VARIATIONS AND ERRORS AS POSSIBLE */

const newFormatStandard = 'https://www.tumblr.com/';
const newFormatIncomplete = 'www.tumblr.com/';
const newFormatInformal = 'tumblr.com/';
const oldFormatStandard = '.tumblr.com/';
const oldFormatIncomplete = '.tumblr.com';

export function isNewFormat(input) {
  if (
    input.startsWith(newFormatStandard) ||
    input.startsWith(newFormatIncomplete) ||
    input.startsWith(newFormatInformal)
  )
    return true;

  if (
    input.endsWith(oldFormatStandard) ||
    input.endsWith(oldFormatIncomplete) ||
    input.includes('/post/')
  )
    return false;
}

export function URLTrimmer(input) {
  if (isNewFormat(input)) {
    return input
      .trim()
      .replace(newFormatStandard, '')
      .replace(newFormatIncomplete, '')
      .replace(newFormatInformal, '');
  }

  if (!isNewFormat(input)) {
    return input
      .trim()
      .replace('https://', '')
      .replace(oldFormatStandard, ' ')
      .replace(oldFormatIncomplete, ' ');
  }
}

export function blognameTrimmer(input) {
  function typoCheck(input) {
    const URLSignifiers = /[.\/:]/g;
    return URLSignifiers.test(input) ? undefined : input;
  }

  if (isNewFormat(input)) {
    const trimmedInput = URLTrimmer(input);
    return typoCheck(trimmedInput);
  }

  if (!isNewFormat(input)) {
    const trimmedInput = URLTrimmer(input).trim();
    return typoCheck(trimmedInput);
  }
  return typoCheck(input);
}

export function blognameValidation(input) {
  if (!blognameTrimmer(input))
    throw new Error(
      `${errorMessage.origin.blognameValidation} ${errorMessage.error.unexpectedError}`
    );
  else return blognameTrimmer(input);
}

export function postURLTrimmer(postID, symbol) {
  return postID.slice(-postID.length, postID.indexOf(symbol));
}

/* CHECKING SESSION STORAGE AVAILABILITY */

export function storageAvailable(type) {
  let storage;

  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (error) {
    return (
      e instanceof DOMException &&
      (e.code === 22 ||
        e.code === 1014 ||
        e.name === 'QuotaExceededError' ||
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      storage &&
      storage.length !== 0
    );
  }
}
