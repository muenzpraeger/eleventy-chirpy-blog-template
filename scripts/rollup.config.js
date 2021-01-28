require("dotenv").config();
import { terser } from "rollup-plugin-terser";
const replace = require("@rollup/plugin-replace");
const siteconfig = require("../content/_data/siteconfig");

const isProduction = process.env.NODE_ENV === "production";

export default {
    input: "src/index.js",
    treeshake: false,
    output: [
        {
            file: "assets/js/min.js",
            sourcemap: !isProduction,
            format: "esm"
        }
    ],
    plugins: [
        // Minify JS in production mode
        isProduction && terser(),
        // Replace env variables for Algolia, if enabled
        siteconfig.algoliaSearch &&
            siteconfig.algoliaSearch.enabled &&
            replace({
                "process.env.ALGOLIA_INDEX": `netlify_${siteconfig.algoliaSearch.siteId}_${siteconfig.algoliaSearch.branch}_all`,
                "process.env.ALGOLIA_APP_ID": siteconfig.algoliaSearch.appId,
                "process.env.ALGOLIA_SEARCH_API_KEY":
                    siteconfig.algoliaSearch.searchApiKey
            })
    ]
};
