const app = require("express")();
require("dotenv").config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.end("hello");
});

app.listen(PORT || 3000, () => {
  console.log(`server running on http://localhost:${PORT || 3000}/`);
});
