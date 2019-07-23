module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': 0,
        'no-debugger': process.env.VUE_APP_NODE_ENV === 'production' ? 2 : 0,
        "no-control-regex": 2,
        "comma-dangle": [1, "never"],
        "no-dupe-args": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-irregular-whitespace": 2,
        "no-alert": process.env.VUE_APP_NODE_ENV === 'production' ? 2 : 0,
        "no-empty-function": 2,
        "space-before-function-paren": [2, "always"],
        "space-in-parens": [2, "never"],
        "no-multi-spaces": 2,
        "no-cond-assign":2,
        "no-extra-parens":0,
        "no-regex-spaces":2,
        "no-fallthrough":2,
        "no-redeclare":2,
        "array-bracket-spacing": [2,"never"]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
