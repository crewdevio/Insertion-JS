const path = require("path");

module.exports = {
  entry: "./dev/js/main2.js",
  watch: false,
  watchOptions: {
    ignored: ["node_modules/**", "dev/jsx/**", "router/**", "src/**"],
  },
  mode: true ? "production" : "development",
  output: {
    path: path.join(__dirname, "dev/"),
    filename: "bundle.js",
  },
};
