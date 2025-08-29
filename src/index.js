const express = require("express");
const app = express();
const bfhlRoute = require("./routes/bfhl");

app.use(express.json());   // parse JSON body
app.use("/", bfhlRoute);   // register routes

// Export the app instead of listening (Vercel handles this)
module.exports = app;
