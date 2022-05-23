module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    devServer: {
        proxy: 'https://api-nutrabbit-dev.dvconsulting.org',
    }
};

