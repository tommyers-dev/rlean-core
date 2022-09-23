var path = require("path");

module.exports = {
  entry: "./index.ts",
  mode: "none",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
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
};
