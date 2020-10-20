const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  devServer: {
    host: "localhost",
    port: 8080
  },

  productionSourceMap: false,
  pluginOptions: {
    // sitemap: {
    //       baseURL: process.env.BASE_URL,
    //       routes,
    //   }
  },
  outputDir: path.join(__dirname, "dist"),
  configureWebpack: () => {
    return {
      devtool: "nosources-source-map",
      plugins: [
        // gzip
        new CompressionPlugin({
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          deleteOriginalAssets: false
        })
      ]
    };
  },
  lintOnSave: false
};
