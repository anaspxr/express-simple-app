const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(userRouter);

const PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
  console.log(`server running on http://localhost:${PORT || 3000}/`);
});
