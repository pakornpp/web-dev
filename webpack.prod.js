import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "production",
  output: {
    // "auto" generates relative URLs so assets resolve correctly regardless
    // of the deployment sub-path (e.g. GitHub Pages /web-dev/).
    publicPath: "auto",
  },
});
