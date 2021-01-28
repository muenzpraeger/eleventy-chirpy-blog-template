---
title: Your first amazing blog post
date: 2021-01-27
image: /assets/images/2021/coolimage.jpg
---

This is your first blog post. And it can contain a lot of stuff. So let's go through a few things.

## Code for fun or profit

Having good looking (totally opiniated here, no) code snippets is mandatory. At least for myself. The included Prism config is based on [this selection](https://prismjs.com/download.html#themes=prism-coy&languages=markup+css+clike+javascript+bash+docker+java+regex+ruby+rust+scala+shell-session+typescript&plugins=show-language+toolbar). No standard theme has been chosen, there are some modifications to fit the Chirpy UX.

Find here an excerpt of the visuals.

### Bash

```bash
if [ -z "$HEROKU_PWA_APP_NAME" ]; then
    echo "Please provide HEROKU_PWA_APP_NAME environment variable"
    exit 1
fi
```

### JavaScript

```javascript
const jestLwcConfig = require("@lwc/jest-preset");
import { resolve } from "path";

export const jestConfig = {
    ...jestLwcConfig,
    resolver: resolve(__dirname, "../utils/resolver.js")
};
```

## Images, images, images

First, you'll notice this stunning picture. I got it royalty-free from Pixabay (great site). Now, that's not the point that I want to make here. The image is not added via Markdown, but instead via the `image` value of the Markdown front matter. As it's always good IMHO to start with a visual you'll get a standardized way of addding an image asset.

Second, the image is optimized for your browser size _and_ browser. Depending on what you currently use as browser you'll get i. e. a JPG or a WebP file. All in the right size for the screen. Obviously, all images have standard settings for lazy loading etc.

## Headings all over the place

It's all standard markdown to render the headings, and as well to display the table of contents (TOC) on the right side.

Note: never ever add a first level heading (aka: `h1`) to your page. This will break accessibility, as the title is already an h1, and will be represented as such in the rendered HTML.

## Other stuff

As to be expected you can do all the things that are _standard_ Markdown. So tables, blockquotes etc. And if you prefer to add custom Markdown functionality, just extend the configuration with custom [markdown-it](https://github.com/markdown-it/markdown-it) plugins.
