module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // publicPath: process.env.NODE_ENV === 'production' ? '/cmcomplaint' : '/',
    configureWebpack: {
        devtool: 'source-map'
    }
}