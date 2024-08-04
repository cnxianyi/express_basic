const jsdocPlugin = require("eslint-plugin-jsdoc");
const prettierPlugin = require("eslint-plugin-prettier");

module.exports = [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: {
      jsdoc: jsdocPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": [
        'warn',
        {
          singleQuote: true,
          semi: true,
          printWidth: 100,
          trailingComma: 'all',
          endOfLine: 'auto',
        },
      ],
      "jsdoc/check-param-names": "error",
      "jsdoc/check-tag-names": "error",
      "jsdoc/check-types": "error",
      // "jsdoc/require-description": "error",
      "jsdoc/require-param": "error",
      // "jsdoc/require-param-description": "error",
      "jsdoc/require-param-type": "error",
      // "jsdoc/require-returns": "error",
      "jsdoc/require-returns-check": "error",
      // "jsdoc/require-returns-description": "error",
      // "jsdoc/require-returns-type": "error",
    },
  },
];
