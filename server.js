var express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

//load config file
dotenv.config({ path: "./config.env" });

var app = express();

app.get("/api/v1/profile/:platform/:gamertag", (req, res) => {
  // console.log(req.params.platform, req.params.gamertag);
  res.send("Hello");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
