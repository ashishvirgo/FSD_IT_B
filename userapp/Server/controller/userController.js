const User=require("../model/usermodel")
const getAllUsers=async(req,res)=>{
    try{
       const users=await User.find();
       res.status(200).json(users);
    }
    catch(err){
      res.status(500).json({message: err.message})
    }
}

module.exports={getAllUsers}