// Transformer to ensure that non-relative links open in a new window
// and have for SEO reasons `rel="noopener"` set.

const { JSDOM } = require("jsdom");
const siteconfig = require("../content/_data/siteconfig");

const processHrefs = async (el) => {
    if (
        !el.href.startsWith("/") &&
        !el.href.startsWith(siteconfig.url) &&
        !el.href.startsWith("about:blank#")
    ) {
        el.target = "_blank";
        el.rel = "noopener";
    }
};

const convert = async (rawContent, outputPath) => {
    let content = rawContent;

    if (outputPath && outputPath.endsWith(".html")) {
        const dom = new JSDOM(content);
        const hrefs = [...dom.window.document.querySelectorAll("a")];

        if (hrefs.length > 0) {
            await Promise.all(hrefs.map((i) => processHrefs(i)));
            content = dom.serialize();
        }
    }

    return content;
};

module.exports = {
    initArguments: {},
    configFunction: async (eleventyConfig = {}) => {
        eleventyConfig.addTransform("externalContentLinks", convert);
    }
};
