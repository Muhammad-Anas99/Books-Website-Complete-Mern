import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("User already exists");
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const createdUser = new User({
      fullName,
      email,
      password: hashpassword,
    });
    await createdUser.save();
    res.status(201).json({
      message: "User created successfully!",
      user: {
        _id: createdUser._id,
        fullName: createdUser.fullName,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server ERROR" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMath = await bcrypt.compare(password, user.password);
    if (!user || !isMath) {
      return res.status(400).json({ error: "Invalid email or password" });
    } else {
      res.status(200).send({
        message: "LoggedIn Successful",
        user: {
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"Internal Server Error (^__^) "});
  }
};
