module.exports = {
    "env": {
        "es6": true,
        "browser": true,
    },
    "extends": "airbnb",
    "plugins": [],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalDecorators": true
        }
    },
    "globals": {
        "SyntheticInputEvent": true,
        "SyntheticKeyboardEvent": true,
    },
    "rules": {
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "space-before-function-paren": ["error", "always"],
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/sort-comp": [0],
        "import/no-extraneous-dependencies": [0],
        "import/prefer-default-export": [0],
        "import/extensions": [0],
        "no-return-assign": [2, "except-parens"],
        "no-unneeded-ternary": ["error", {
            "defaultAssignment": true
        }],
        "valid-typeof": [0],
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/label-has-for": "off",
        "class-methods-use-this": "off",
        "no-class-assign": "off",
        "linebreak-style": 0
    }
};
