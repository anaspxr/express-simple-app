const router = require("express").Router();
const fs = require("node:fs");
const userControllers = require("../controllers/userControllers");

router
  .route("/users")
  .get(userControllers.handleGet)
  .post(userControllers.handleCreate);

router
  .route("/users/:id")
  .get(userControllers.handleUserView)
  .delete(userControllers.handleDelete)
  .post(userControllers.handleEdit);

module.exports = router;
