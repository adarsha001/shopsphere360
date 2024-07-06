const jwt = require("jsonwebtoken");
const User=require("../models/user-model")
const authmiddleware = async(req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "unauthorized HTTP,token not provider" });
  }


  const jwtToken=token.replace("Bearer","").trim();
  console.log("token fom auth middleware",jwtToken);

  try {
const isverified=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
console.log(isverified);
const userdata= await User.findOne({email:isverified.email}).select({password:0})
console.log(userdata);

req.user=userdata;
req.token=token;
req.userID=userdata._id;
    next();

  } catch (error) {
    return res.status(401).json({message:"unauthorized.Invalid token"})
  }
 
};

module.exports = authmiddleware;
