module.exports = {
  root: true,
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:import/typescript",
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "max-lines": ["warn", {max: 500, skipBlankLines: true, skipComments: true}],
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {vars: "all", args: "none", ignoreRestSiblings: false},
    ],
    "no-restricted-imports": ["error", "lodash"],
    "class-methods-use-this": "error",
    "lines-between-class-members": [
      "error",
      "always",
      {exceptAfterSingleLine: true},
    ],
    "react/prop-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "class-methods-use-this": ["error", {exceptMethods: ["render"]}],
    "@typescript-eslint/no-implicit-any-catch": "error",
    "no-debugger": "error",
    "react-hooks/exhaustive-deps": "error",
  },
};
