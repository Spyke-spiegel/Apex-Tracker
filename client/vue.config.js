module.exports = {
  devServer: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:6000"
      }
    }
  }
};
