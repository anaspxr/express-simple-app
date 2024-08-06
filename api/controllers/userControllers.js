const fs = require("node:fs");
const User = require("../schemas/userSchema");

const handleGet = async (_, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleCreate = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleUserView = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
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
          res.sendStatus(400);
        } else {
          res.sendStatus(202);
        }
      });
    }
  });
};

const handleEdit = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndUpdate(id, req.body);
    res.sendStatus(202);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  handleCreate,
  handleGet,
  handleUserView,
  handleDelete,
  handleEdit,
};
