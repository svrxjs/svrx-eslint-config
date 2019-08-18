module.exports = {
    env: {
        node: true,
        browser: true,
        mocha: true
    },
    extends: require.resolve('eslint-config-airbnb-base'),
    plugins: ['import'],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        expect: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        'import/no-dynamic-require': 'off',
        'no-param-reassign': 'off',
        'no-underscore-dangle': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true
            }
        ]
    }
}
