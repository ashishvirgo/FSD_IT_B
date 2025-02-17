const http=require("http");
const fs=require("fs/promises");
const server=http.createServer(async(req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/html");
    const url=req.url;
    if(url=="/home" && req.method=="GET"){
        const data=await fs.readFile("Home.html")
        res.write(data);
    }
    else if(url=="/about" && req.method=="GET"){
        const data=await fs.readFile("About.html")
        res.write(data);
        
    }
    else
    {
        const data=await fs.readFile("Error.html")
        res.write(data);
    }
    
   
    res.end();

})

server.listen(3001,(err)=>{
    try{
        if(err) throw err;
        console.log("Server is running on port no 3001")
    }
    catch(err){
        console.log("Server Error:",err.message);
    }
    
})