const express = require("express");
const app = express();
const bfhlRoute = require("./routes/bfhl");

app.use(express.json());   // parse JSON body
app.use("/", bfhlRoute);   // register routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
