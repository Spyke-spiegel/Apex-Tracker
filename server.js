var express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

//load config file
dotenv.config({ path: "./config.env" });

var app = express();

// Dev logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Profile routes
app.use("/api/v1/profile", require("./routes/profile"));

//Handle Production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static(__dirname + "/production/"));

  //handle Single page application
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
