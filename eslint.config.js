const jsdocPlugin = require("eslint-plugin-jsdoc");
const prettierPlugin = require("eslint-plugin-prettier");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const typescriptEslintParser = require("@typescript-eslint/parser");

module.exports = [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      parser: typescriptEslintParser,
    },
    plugins: {
      jsdoc: jsdocPlugin,
      prettier: prettierPlugin,
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      "prettier/prettier": [
        "warn",
        {
          singleQuote: false,
          semi: true,
          printWidth: 100,
          trailingComma: "all",
          endOfLine: "auto",
        },
      ],
      "jsdoc/check-param-names": "error",
      "jsdoc/check-tag-names": "error",
      "jsdoc/check-types": "error",
      "jsdoc/require-description": "error",
      "jsdoc/require-param": "error",
      "jsdoc/require-param-description": "error",
      "jsdoc/require-param-type": "error",
      "jsdoc/require-returns": "error",
      "jsdoc/require-returns-check": "error",
      "jsdoc/require-returns-description": "error",
      "jsdoc/require-returns-type": "error",
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
];
