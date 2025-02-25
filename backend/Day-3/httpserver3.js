const http=require("http");
const port=3000;
const server=http.createServer(async(req,res)=>{
  res.setHeader("Content-Type","application/json");
  res.statusCode=200;
  const data=await fetch("https://dummyjson.com/recipes");
  const datajson=await data.json();
  const newdata=datajson.recipes;
  const names=newdata.map((re)=>{
       return re.name;
  })
  res.end(JSON.stringify(names));
})  

server.listen(port,(err)=>{
    try{
        if(err) throw err;
        console.log(`server is running on port ${port}`)
    }
    catch(err){
        console.log("Server Error",err/message)
    }
})