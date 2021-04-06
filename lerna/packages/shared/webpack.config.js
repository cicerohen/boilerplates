const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: {
      type: "umd",
    },
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: ["react"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
};
