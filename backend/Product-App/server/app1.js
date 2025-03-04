const express=require("express");
const fs=require("fs/promises")
const app=express();
const port=3005;
let users=[];
const loadUser=async()=>{
    try{
    const data=await fs.readFile("./users.json","utf-8")
    users=JSON.parse(data);
    }
    catch(err){
        users=[];
    }
}
const savedata=async()=>{
    await fs.writeFile("./users.json",JSON.stringify(users))
}
app.use(express.json())
loadUser();
app.get("/users",(req,res)=>{
    res.status(200).json(users);
})
app.get("/user/:id",(req,res)=>{
    const uid=req.params.id;
    const index=users.findIndex(ind=>ind.id==uid)
    if(index==-1){
        res.status(400).json({status: "fail",message: "User Not found"});  
    }
    else{
        res.status(200).json({status: "success",message: "User found",data: users[index]});  
    }
})
app.post("/createuser",(req,res)=>{
    const {name,email}=req.body;
    const newId=Date.now();
    const newUser={
        id: newId,name,email
    }
    users.push(newUser);
    savedata();
res.status(201).json({status: "success",message: "User Created Successfully",data: newUser})
})
app.patch("/edituser/:id",(req,res)=>{
    const uid=req.params.id;
    const {name: newname,email: newemail}=req.body;
    if(!newname || !newemail){
    res.status(400).json({status:"fail",message:"All fields required"})    
    }
    else{
        const index=users.findIndex(ind=>ind.id==uid);
        if(index==-1){
            res.status(400).json({status:"fail",message:"user not found"})     
        }
        else{
            users[index].name=newname;
            users[index].email=newemail;
            res.status(200)
.json({status:"success",message:"user data edited successfully",data:users[index]})
        }
    }
})
app.delete("/deleteuser/:id",(req,res)=>{
    const uid=req.params.id;
    const index=users.findIndex(ind=>ind.id==uid)
    if(index==-1){
        res.status(400).json({status:"fail",message:"user not found"})    
    }
    else{
       const deldata=users.splice(index,1)
     res.status(200).json({status: "success",message: "user deleted successfully",data:deldata})   
    }
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

