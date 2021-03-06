module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "plugin:@typescript-eslint/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["jest", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: {
    "max-len": [
      "error",
      {
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreUrls: true,
        code: 100,
      },
    ],
    "import/prefer-default-export": "off",
    "no-param-reassign": [2, { props: false }],
    "no-useless-escape": "off",
    "import/no-cycle": [0],
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "consistent-return": "off",
    "no-else-return": "off",
    "spaced-comment": "off",
    "no-unused-vars": "off",
    "prefer-arrow-callback": "off",
    "prefer-destructuring": "off",
    "lines-between-class-members": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "no-continue": "off",
    "no-plusplus": "off",
    "no-new": "off",
    "no-use-before-define": "off",
    "no-explicit-any": "off",
    "no-prototype-builtins": "off",
    "class-methods-use-this": "off",
  },
};
