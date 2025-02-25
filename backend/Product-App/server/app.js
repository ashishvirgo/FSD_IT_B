const express=require("express");
const app=express();
const port=3000;
const products=[{
    id: 101,
    title: "LAPTOP",
    brand: "HP",
    price: 52000,
    quantity: 5
},
{
    id: 102,
    title: "LAPTOP",
    brand: "ASUS",
    price: 51000,
    quantity: 2
}];
app.use(express.json())
app.get("/products",(req,res)=>{
     res.status(200).json(products);
})
app.get("/product/:id",(req,res)=>{
    const pid=req.params.id;
    console.log("pid=",pid)
    const index=products.findIndex(ind=>ind.id==pid);
    if(index==-1){
        res.status(400).json({status: "fail",message: "Product id not found"})
    }
    else{
        res.status(200).json({status: "success",message: "Product id found",data: products[index]})   
    }
})
app.post("/product",(req,res)=>{
    const {title,brand,price,quantity}=req.body;
    if(!title || !brand || !price || !quantity){
        res.status(400).json({status: "fail",message: "All fields required"});
    }
    else{
        // const newId=products.length>0 ? (products[products.length-1].id+1) :10
        const newId=Math.floor((Math.random()*900000)+100000);
        const newProduct={
            id: newId,title,brand,price,quantity
        }
        products.push(newProduct);
        res.status(201).json({status: "success",message:"product created successfully",newProduct});
    }
    
})

app.listen(port,(err)=>{
    try{
      if(err) throw err;
      else
      console.log(`Server is running on port ${port}`)
    }
    catch(err){
    console.log("Server Error:",err.message);
    }
})