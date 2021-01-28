const isProduction = process.env.NODE_ENV === "production";

let cssnano = undefined;

// We want optimization only in production
if (isProduction) {
    cssnano = {
        cssnano: {
            preset: "default"
        }
    };
}

const plugins = {
    tailwindcss: {},
    autoprefixer: {},
    ...(isProduction && cssnano)
};

module.exports = {
    plugins
};
