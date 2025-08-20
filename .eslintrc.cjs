module.exports = {
    root: true,
    extends: ["eslint:recommended", "plugin:astro/recommended"],
    overrides: [
        {
            files: ["*.astro"],
            parser: "astro-eslint-parser",
            parserOptions: {
                parser: "@babel/eslint-parser",
                extraFileExtensions: [".astro"],
            },
            rules: {},
        },
    ],
};
