module.exports = {
    extends: ['type10/node'],
    env: {
        mocha: true
    },
    rules: {
        'func-names': 0,
        'no-unused-expressions': 0,
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
    }
};

