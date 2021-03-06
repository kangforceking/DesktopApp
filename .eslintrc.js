module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/strongly-recommended',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4],
        quotes: ['error'],
        'vue/html-indent': ['error', 4]
    },
    globals: {
        // layer: false
    }
}
