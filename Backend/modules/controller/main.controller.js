const Users = require("../models/users");
const jwt = require("jsonwebtoken");

let { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  let { email, password } = req.body;

  const user = await Users.findOne({ email: email });

  if (user) {
    const match = await bcrypt.compare(password, user.password);

    console.log(match);

    if (match) {
      const token = jwt.sign(
        { first_name: user.first_name, email: user.email },
        "shhhhh"
      );
      res.json({
        message: "success",
        token,
        user: {
          first_name: user.first_name,
          email: user.email,
        },
      });
    } else {
      res.json({ message: "Wrong Password" });
    }
  } else {
    res.json({ message: "Email Isn't Available" });
  }
};

const register = async (req, res) => {
  let { email, first_name, last_name, password, age } = req.body;

  try {
    const check = await Users.findOne({ email: email });
    if (check) {
      res.json({ message: "Email Is Already Used" });
    } else {
      const createUser = new Users({
        email,
        first_name,
        last_name,
        age,
        password,
      });
      await createUser.save();
      res.json({ message: "success" });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "failed" });
  }
};

module.exports = {
  login,
  register,
};
