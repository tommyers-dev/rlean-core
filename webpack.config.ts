var path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "none",
  output: {
    filename: "index.js",
    globalObject: "this",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      root: "React",
    },
  },
  //devtool: "inline-source-map",
};
