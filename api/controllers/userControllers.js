const fs = require("node:fs");

const handleGet = (_, res) => {
  fs.readFile("./data/users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.header({ "Content-Type": "application/json" });
      res.send(data);
    }
  });
};

const handleCreate = (req, res) => {
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
};

const handleUserView = (req, res) => {
  const id = req.params.id;
  fs.readFile("./data/users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.header({ "Content-Type": "application/json" });
      const allUsersData = JSON.parse(data);
      const userData = allUsersData.find((user) => user.id == id);
      res.send(userData);
    }
  });
};

const handleDelete = (req, res) => {
  const id = req.params.id;
  fs.readFile("./data/users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.header({ "Content-Type": "application/json" });
      const allUsersData = JSON.parse(data);
      const newUSersData = JSON.stringify(
        allUsersData.filter((user) => user.id != id)
      );
      fs.writeFile("./data/users.json", newUSersData, "utf-8", (err) => {
        if (err) {
          console.log(err);
          res.sendStatus(400);
        } else {
          res.sendStatus(202);
        }
      });
    }
  });
};

const handleEdit = (req, res) => {
  const id = req.params.id;
  fs.readFile("./data/users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      const parsed = JSON.parse(data);
      console.log(req.body);
      const edited = req.body;
      const index = parsed.findIndex((user) => user.id == id);
      if (index === -1) {
        res.send(400);
      } else {
        parsed.splice(index, 1, edited);
        const newData = JSON.stringify(parsed);
        fs.writeFile("./data/users.json", newData, "utf-8", (err) => {
          if (err) {
            console.log(err);
            res.sendStatus(400);
          } else {
            res.sendStatus(202);
          }
        });
      }
    }
  });
};
module.exports = {
  handleCreate,
  handleGet,
  handleUserView,
  handleDelete,
  handleEdit,
};
