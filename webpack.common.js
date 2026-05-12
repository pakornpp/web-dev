import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";
// import CopyWebpackPlugin from "copy-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: {
    main: "./src/index.js",
    about: "./src/about.js",
    "portfolio-luxe-watch": "./src/portfolio-luxe-watch.js",
    "portfolio-cafe":   "./src/portfolio-cafe.js",
    "portfolio-puphub": "./src/portfolio-puphub.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[path][name][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/about.html",
      filename: "about.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/portfolio-luxe-watch.html",
      filename: "portfolio-luxe-watch.html",
      chunks: ["portfolio-luxe-watch"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/portfolio-cafe.html",
      filename: "portfolio-cafe.html",
      chunks: ["portfolio-cafe"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/portfolio-puphub.html",
      filename: "portfolio-puphub.html",
      chunks: ["portfolio-puphub"],
    }),
    // Uncomment and add patterns when you have static files to copy:
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: "src/robots.txt", to: "robots.txt" },
    //   ],
    // }),
  ],
};
