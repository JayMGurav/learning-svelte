const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    "dist/bundle": ["./src/main.js"],
  },
  output: {
    path: path.join(__dirname, "/public"),
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
    compress: true,
    hot: true,
    port: 8080,
  },
  devtool: "source-map",
  resolve: {
    alias: {
      // svelte: path.dirname(require.resolve("svelte/package.json")),
      "@/components": path.resolve(__dirname, "src/components/"),
    },
    extensions: [".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            compilerOptions: {
              dev: true,
            },
            emitCss: false,
            hotReload: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        // required to prevent errors from Svelte on Webpack 5+
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
