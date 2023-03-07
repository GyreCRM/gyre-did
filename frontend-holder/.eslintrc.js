module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb',
        'prettier',
        'plugin:prettier/recommended',
    ],
    rules: {
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx'] },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        'no-unused-vars': 1,
        'import/prefer-default-export': 'off',
        'react/prop-types': 0,
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    // And all your import aliases
                    ['@apis', './src/apis'],
                    ['@assets', './src/assets'],
                    ['@components', './src/components'],
                    ['@hooks', './src/hooks'],
                    ['@pages', './src/pages'],
                    ['@utils', './src/utils'],
                    ['@recoil', './src/recoil'],
                ],
                extensions: ['.ts', '.js', '.jsx', '.json'],
            },
        },
    },
};
