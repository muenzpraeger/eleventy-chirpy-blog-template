# eleventy-chirpy-blog-template

[![Github Workflow](<https://github.com/muenzpraeger/eleventy-chirpy-blog-template/workflows/Blog%20build%20(main)/badge.svg?branch=main>)](https://github.com/muenzpraeger/eleventy-chirpy-blog-template/actions?query=workflow%3A%22Blog+build+%28main%29%22) [![Netlify Status](https://api.netlify.com/api/v1/badges/ceb123c7-d071-495e-b9a7-51d82b38c8a0/deploy-status)](https://app.netlify.com/sites/eleventy-chirpy-blog-template/deploys)

[11ty](https://www.11ty.dev/) version of the popular [Chirpy Jekyll](https://github.com/cotes2020/jekyll-theme-chirpy) blog theme. Also powers [my personal blog](https://blog.winkelmeyer.com). I liked the UX a lot, but not the tech stack, hence I re-built it for myself. Sharing here with everybody, in case you like the same.

You can check out the live version on <https://eleventy-chirpy-blog-template.netlify.app>.

If you want to deploy, there's a button for it: [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/muenzpraeger/eleventy-chirpy-blog-template)

## Features

-   💯 on Lighthouse
-   🔆 and 🌛 mode
-   🎯 SEO and OpenGraph optimized
-   🌄 Responsive images optimization
-   👀 Accessible
-   🛠 JavaScript and CSS build optimization
-   👨‍💻 Prism-based syntax highlighting
-   📚 RSS (yup, still a thing), sitemap.xml, and JSON-LD
-   🔍 [Algolia Search](https://github.com/algolia/algoliasearch-netlify) enabled
-   and more

Opinionated setup with [Prettier](https://prettier.io/), [ESlint](https://eslint.org/), [markdownlint](https://github.com/DavidAnson/markdownlint) and others. UX build with [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) and [TailwindCSS](https://tailwindcss.com/docs). JavaScript bundled with [Rollup](https://rollupjs.org/).

## Configuration

All blog configuration is handled via [`siteconfig.js`](./content/_data/siteconfig.js). Everything is inline documented.

## Deployment

All build processes rely on how `NODE_ENV` is set. For production builds, which then also means minified CSS and JS you've to set the value to `production`. I mention this explicitly as this is for some vendors not the default.

If you want to speed up your build times a bit you can add the generated images to your git repo. The `.gitignore` already contains a commented section for that.

## Local Development

### Before you install dependencies

This repo uses [Volta](https://volta.sh/). Get it, and it'll make your node life so much easier.

### Instructions

Clone this repository.

```zsh
git clone https://github.com/muenzpraeger/eleventy-chirpy-blog-template
```

Change into the cloned directory.

```zsh
cd eleventy-chirpy-blog-template
```

Install dependencies. Note, if you prefer `npm` over `yarn` make sure to first remove the `yarn.lock` file, and then run `npm install`.

```zsh
yarn install
```

Start the local development process.

```zsh
yarn dev
```

Open the page, usually on <http://localhost:8080>, and dig around!

## Credits

The UX of this template is based on the popular Chirpy template, just with a different tech stack. If you prefer to run Jekyll and Bootstrap, checkout [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) here. It's great.

Also big thanks to the the authors of the [11ty High Performance Blog](https://github.com/google/eleventy-high-performance-blog).
