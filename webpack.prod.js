import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
  output: {
    // "auto" generates relative URLs so assets resolve correctly regardless
    // of the deployment sub-path (e.g. GitHub Pages /web-dev/).
    publicPath: "auto",
  },
});
