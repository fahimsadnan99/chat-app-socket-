const express = require("express");
const upload = require("../middleWare/multer");
const {
  signIn,
  signUp,
  updateInformation,
  removeAccount,
} = require("../controller/UserController");

const User = express.Router();

User.route("/signup").post(upload.single("file"), signUp);
User.route("/signin").post(signIn);
User.route("/:id").patch(updateInformation).delete(removeAccount)



module.exports = User;