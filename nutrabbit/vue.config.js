module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  filenameHashing: true,
  devServer: {
    proxy: "https://api-nutrabbit-dev.dvconsulting.org",
  },
};
