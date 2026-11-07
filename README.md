# Reblog Checker

A client-side web tool for Tumblr users that checks whether a given post is currently present on their blog — in other words, whether they have reblogged it (and if so, where).

> Originally built as a learning exercise and my first development project. It is kept here for reference.

## What it does

Reblog Checker answers one question: *"Have I reblogged this post?"*

You give it your blog name, then give it the URL of a Tumblr post. It scans your blog's posts, compares them against that post, and tells you either that the post cannot be found in your blog, or how many times it appears there — with links to your reblog(s).

Everything runs in the browser. There is no backend and no database; the only network requests are to the Tumblr API.

## How it works

Tumblr reblogs of the same original post share a common **root ID**. Reblog Checker relies on this: if the root ID of the post you're checking matches the root ID of any post on your blog, you've reblogged it.

The flow has four steps:

1. **Blog lookup** — The blog name is validated and trimmed, then the Tumblr API is queried for basic blog info, including the blog's UUID and total post count.
2. **Post scan** — All of the blog's posts are fetched in pages of 50 (with `reblog_info=true`) using the blog UUID. For each post, its root ID (`reblogged_root_id`, falling back to its own `id_string`) and its URL are saved to `sessionStorage`.
3. **Post lookup** — The URL you provide is parsed (both `blogname.tumblr.com/post/ID` and `www.tumblr.com/blogname/ID` formats are supported), the post is fetched, and its root ID is extracted.
4. **Comparison** — The post's root ID is compared against the stored root IDs. A match produces a positive result with the number of occurrences and links to your reblogs; no match produces a negative result.

Because the scan lives in `sessionStorage`, the data exists only for as long as the tab is open, and nothing is persisted anywhere.

## Usage

**Step 1 — Enter your blog name.** Type your Tumblr blog name (with or without the `https://` / `.tumblr.com` parts — the input is normalized) and wait while all of your posts are processed.

**Step 2 — Enter the post URL.** Paste the link to the post you want to check, in either of these formats:

- `https://blogname.tumblr.com/post/123456789101112`
- `https://www.tumblr.com/blogname/123456789101112`

Then submit and read the result.

If a post-related lookup fails (for example, because the original poster's blog is hidden), the tool suggests using the link to one of the reblogs found in the post's notes instead.

## Requirements and limitations

- Your blog must **not** be hidden from people without a Tumblr account, otherwise its posts cannot be fetched.
- The tool is optimized for blogs with **fewer than ~15,000 posts**, since every post is fetched via paginated API requests.
- Tumblr API **rate limits** apply; a `429` response means you should wait and try again later.
- Only public information is requested, and results are stored in `sessionStorage` — closing the tab clears everything.
- The Tumblr API key is embedded in the client (`src/js/config.js`), as is unavoidable for a purely client-side app.

## Running locally

Requires [Node.js](https://nodejs.org/) and npm.

```bash
npm install
npm start      # development server via Parcel
npm run build  # production build into ./dist
```

Built with plain JavaScript (ES modules), [Parcel](https://parceljs.org/) as the bundler, and [Sass](https://sass-lang.com/) for styling. Babel is configured for transpilation.

## Project structure

```
index.html              # Single page; both steps and both result screens live here
src/
  js/
    config.js           # API key, API base URL, page size
    controller.js       # Entry point; wires events to the model and views
    model.js            # All fetching, storage, and reblog-checking logic
    helpers.js          # URL parsing/normalization, validation, error messages
    views/
      View.js           # Base view: screens, errors, spinners, resets
      stepOneView.js
      stepTwoView.js
      sessionView.js    # Session/storage handling, scroll, step transitions
      outputView.js     # Positive/negative result rendering
  sass/                 # Styles
```

## Disclaimer

This application is an unofficial initiative, not endorsed or otherwise supported by Tumblr, Inc., and is developed in compliance with the [Tumblr Application Developer and API License Agreement](https://www.tumblr.com/docs/api_agreement). Any data requested from the Tumblr API is collected solely to feed the necessary information to the application.

## License

ISC
