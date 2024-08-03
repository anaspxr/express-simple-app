const router = require("express").Router();
const fs = require("node:fs");
const userControllers = require("./controllers");

router
  .route("/users")
  .get(userControllers.handleGet)
  .post(userControllers.handleCreate);

router
  .route("/users/:id")
  .get(userControllers.handleUserView)
  .delete(userControllers.handleDelete);

module.exports = router;
