import { user } from "../../models/userModel.js";
import jwt from "jsonwebtoken";
import argon2 from "argon2";

let getuser = async (req, res) => {
  let result = await user.find();
  res.send(result);
};

let signup = async (req, res) => {
  let { name, email, Password } = req.body;
  let hash = await argon2.hash(Password);

  let result = await user.create({
    name,
    email,
    Password: hash,
  });

  res.send("user has been signedin ");
};

let login = async (req, res) => {
  let { email, Password } = req.body;
  let dbuser = await user.findOne({ email });

  if (!dbuser) {
    res.status(400).json({ msg: "user not found" });
  }
  let iscorrect = await argon2.verify(dbuser.Password, Password);
  if (iscorrect) {
    let Pass = "gagan";
    let token = jwt.sign(
      {
        id: dbuser._id,
        email: email,
      },
      Pass
    );
    res.send({ token });
  } else {
    res.status(400).json({ msg: "incorrect Password" });
  }
};

export { getuser, signup, login };
