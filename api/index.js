const express = require("express");
const app = express();
require("dotenv").config();
const userRouter = require("./routes");

app.use(express.json());
app.use(userRouter);

const PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
  console.log(`server running on http://localhost:${PORT || 3000}/`);
});
