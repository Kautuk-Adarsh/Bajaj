const express = require("express");
const bfhlRoute = require("./routes/bfhl");
const serverless = require("serverless-http");

const app = express();
app.use(express.json());
app.use("/", bfhlRoute);


module.exports = app;
module.exports.handler = serverless(app);
