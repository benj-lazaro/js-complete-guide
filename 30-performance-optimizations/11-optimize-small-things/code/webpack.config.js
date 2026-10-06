const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    shop: "./src/optimized/shop.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist", "assets", "scripts"),
    publicPath: "assets/scripts/",
    clean: true,
  },
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  devtool: [{ type: "javascript", use: "source-map" }],
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]],
            plugins: [
              [
                "polyfill-corejs3",
                {
                  method: "usage-global",
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
