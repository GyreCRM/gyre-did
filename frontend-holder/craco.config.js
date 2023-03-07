const CracoAlias = require('craco-alias');

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'options',
                baseUrl: './',
                aliases: {
                    '@apis': './src/apis',
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@hooks': './src/hooks',
                    '@pages': './src/pages',
                    '@utils': './src/utils',
                    '@recoil': './src/recoil',
                },
            },
        },
    ],
};
