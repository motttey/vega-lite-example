module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": ["warn", "always"],
        "indent": ["warn", 4]
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};
