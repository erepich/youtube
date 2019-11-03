module.exports = {
  "settings": {
    "react": {
        "version": require('./package.json').dependencies.react,
    },
  },
  "env": {
      "browser": true,
      "es6": true,
      "jest": true,
  },
  "extends": ["eslint:recommended", "plugin:react/recommended","airbnb-base"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "afterEach": "readonly",
    "beforeEach": "readonly",
    "describe": "readonly",
    "expect": "readonly",
    "test": "readonly",
    "jest": "readonly"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true,
        "modules": true,
        "experimentalObjectRestSpread": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "plugins": [
      "react"
  ],
  "rules": {
    "comma-dangle": 0,
    "react/jsx-uses-vars": 1,
    "react/display-name": 1,
    "no-unused-vars": "warn",
    "no-console": 1,
    "no-unexpected-multiline": "warn"

  },
  "overrides": [
    {
      "files": ["bin/*.js", "lib/*.js"],
      "excludedFiles": "*.test.js",
      "rules": {
        "quotes": ["error", "single"]
      }
    }
  ]
};