const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../production"),
  devServer: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:6000"
      }
    }
  }
};
