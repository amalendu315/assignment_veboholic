const express = require("express");
const cors = require("cors");
const app = express();


//Using Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Importing Routes
const buy = require("./routes/buyRoute");
const sell = require("./routes/sellRoute");

//Using ROutes
app.use("/api/v1",buy);
app.use("/api/v1",sell);

module.exports = app;