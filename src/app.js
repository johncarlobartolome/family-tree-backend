const express = require("express");
const connectDB = require("./db/db");
const app = express();
const cors = require("cors");

const usersRoute = require("./routes/users");

connectDB();

app.use(express.json());
app.use(cors());

app.use("/users", usersRoute);

module.exports = app;
