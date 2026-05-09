import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "production",
  output: {
    // Absolute path required so subdirectory pages resolve JS/CSS/images
    // to the repo root rather than relative to their own directory.
    publicPath: "/",
  },
});
