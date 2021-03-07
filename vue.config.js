// const { resolve } = require("core-js/fn/promise");

module.exports = {
    configureWebpack: {
        resolve: {
            // extentsions: [],
            alias: {
                // '@' : resolve('./src'),
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'components': '@/components',
                'views': '@/views',
            }
        }
    }
}