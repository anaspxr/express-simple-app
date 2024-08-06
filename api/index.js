const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
require("dotenv").config();

mongoose.connect("mongodb://localhost/exp").then(() => {
  console.log("connected to db");
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);

const PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
  console.log(`server running on http://localhost:${PORT || 3000}/`);
});
