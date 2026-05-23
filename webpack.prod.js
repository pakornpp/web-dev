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
    // Content hash in chunk filenames prevents stale-cache issues after re-deploys:
    // a cached main.js referencing old chunks would 404 without this, silently
    // breaking the dynamic locale import and leaving the spinner stuck forever.
    chunkFilename: "[id].[contenthash:8].js",
  },
});
