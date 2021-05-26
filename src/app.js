const express = require("express");
const connectDB = require("./db/db");
const app = express();

const usersRoute = require("./routes/users");

connectDB();

app.use(express.json());

app.use("/users", usersRoute);

module.exports = app;
