import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development",
  devtool: "inline-source-map",
  output: {
    publicPath: "/",
  },
  devServer: {
    static: "./dist",
    hot: true,
  },
});
