// Transformer to minify HTML output.

const htmlmin = require("html-minifier");

const convert = async (rawContent, outputPath) => {
    const content = rawContent;

    if (outputPath && outputPath.endsWith(".html")) {
        const minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true
        });
        return minified;
    }

    return content;
};

module.exports = {
    initArguments: {},
    configFunction: async (eleventyConfig = {}) => {
        eleventyConfig.addTransform("minifyHTML", convert);
    }
};
