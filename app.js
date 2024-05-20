const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
require("dotenv/config");

var app = express();
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors());
app.options("*", cors());

//Start server
const env = process.env;
const hostname = env.HOSTNAME;
const port = env.PORT;
const connectionString = env.MOGODB_CONNECTION_STRING;

try {
  mongoose.connect(connectionString).then(() => {
    console.log("Connection established with database");
  });
} catch (error) {
  console.log("An error occured trying to connect with db:", error);
}

app.listen(port, hostname, () => {
  console.log(`I am listening to hostname: http://${hostname}:${port}`);
});
