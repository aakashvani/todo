require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const routes=require("./routes/index")
app.use(express.json());
app.use(routes)
module.exports = app;