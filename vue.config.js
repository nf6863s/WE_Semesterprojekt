module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/WE_Semesterprojekt/'
        : '/',
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap(args => {
                //args[0].meta = {'http-equiv': 'Content-Security-Policy', 'content':'upgrade-insecure-requests'};
                return args;
            })
    }
}