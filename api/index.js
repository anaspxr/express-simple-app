const app = require("express")();
const userRouter = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT;

app.use(userRouter);
app.listen(PORT || 3000, () => {
  console.log(`server running on http://localhost:${PORT || 3000}/`);
});
