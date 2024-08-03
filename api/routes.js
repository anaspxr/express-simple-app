const router = require("express").Router();
const fs = require("node:fs");

router.get("/users", (_, res) => {
  fs.readFile("./data/users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.header({ "Content-Type": "application/json" });
      res.send(data);
    }
  });
});

router.post("/users", (req, res) => {
  fs.readFile("./data/users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      const parsed = JSON.parse(data);
      const newUser = req.body;
      newUser.id = Date.now();
      parsed.push(newUser);
      const newData = JSON.stringify(parsed);
      fs.writeFile("./data/users.json", newData, "utf-8", (err) => {
        if (err) {
          console.log(err);
          res.sendStatus(400);
        } else {
          res.sendStatus(201);
        }
      });
    }
  });
});

module.exports = router;
