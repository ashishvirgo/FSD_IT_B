const express=require("express");
const usercontroller=require("../controller/userController");
const router=express.Router();
router.get("/users",usercontroller.getAllUsers);
module.exports=router;