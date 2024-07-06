const Home = (req, res) => {
  try {
    res.status(200).send("welcome to world best mern ");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Check if user with the same email already exists
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const saltround = 10;
    const hash_password = await bcrypt.hash(password, saltround);

    // Create a new user
    const newUser = await User.create({
      username,
      email,
      phone,
      password: hash_password,
    });

    res.status(200).json({
 msg:"registration successfull",
      token: await newUser.generateToken(),
      userId: newUser._id.toString(),
    });
  } catch (error) {
    console.error(error);
 next(error);
  }
};
const hello =async (req,res) =>{
  try {
    res.status(200).json({message:"hello"});
  } catch (error) {
    res.status(500).json("internal error");
  }
} 




const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "invalid " });
    }
    const user = await bcrypt.compare(password, userExist.password);

    if (user) {
      res
        .status(200)
        .json({
          msg: "login successful",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
    } else {
      res.status(401).json({ message: "invalid email or password" });
    }
  } catch (error) {
  next(error);
  }
};

const user=async(req,res)=>{

  try {
    const userdata=req.user
    console.log(userdata);
    return res.status(200).json({msg:userdata});
    
    
  } catch (error) {
    console.log(`error from the user route ${error}` )
  }
}

module.exports = { register, Home, login ,user ,hello};
