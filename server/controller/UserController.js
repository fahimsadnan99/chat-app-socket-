const UserSchema = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const _ = require("lodash");

const signUp = async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const img = url + "/upload/" + req?.file?.filename;

  const body = {
    ...req.body,
    img:
      (req?.file?.filename !== undefined ? img : req.body.file) ||
      `https://robohash.org/df69d9f0dd095272aea947c872853e54?set=set4&bgset=&size=400x400`,
  };

  try {
    const userExist = await UserSchema.findOne({ email: body.email });
    if (userExist) return res.status(202).json({ message: "User Already Exist" });

    let user = new UserSchema(body);
    user.password = await bcrypt.hash(req.body.password, 10);
    await user.save();
    return res.status(201).json({
      message: "User Signup Successfully",
      user: _.pick(user, ["_id", "name", "email", "img"]),
    });
  } catch (err) {
    return res.status(500).json({ message: "Server Problem" });
  }
};

const signIn = async (req, res) => {
  try {
    const user = await UserSchema.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ message: "User not Found" });
    let comparePass = await bcrypt.compare(req.body.password, user.password);
    if (!comparePass) return res.status(400).json({ message: "credential Wrong" });

    let token = await user.generateJWT();

    return res.status(200).json({
      message: "User Sign In Successfully",
      user: _.pick(user, ["_id", "name", "email", "img"]),
      token: token,
    });
  } catch (err) {
    return res.status(500).json({ message: "Server Problem" });
  }
};

const updateInformation = async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const img = url + "/upload/" + req.file?.filename;

  const body = {
    ...req.body,
    img:
      (req?.file?.filename !== undefined ? img : req.body.file) ||
      `https://robohash.org/df69d9f0dd095272aea947c872853e54?set=set4&bgset=&size=400x400`,
  };
  try {
    const updateData = await UserSchema.findByIdAndUpdate(
      { _id: req.params.id },
      { ...body },
      {
        new: true,
      }
    );
    return res.status(200).json({
      message: "Update information Successfully",
      updatedData: _.pick(updateData, ["_id", "name", "email", "img"]),
    });
  } catch (err) {
    return res.status(500).json({ message: "Server Problem" });
  }
};

const removeAccount = async (req, res) => {
  try {
    const removeAccount = await UserSchema.findByIdAndDelete({ _id: req.body.id });

    return res.status(200).json({ message: "Account Delete Successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Server Problem" });
  }
};

module.exports = { signIn, signUp, updateInformation, removeAccount };
