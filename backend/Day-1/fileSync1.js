const fs=require("node:fs");
function myReadFile(){
try{
const data=fs.readFileSync("dummy.txt","utf-8");
console.log("File Data:",data);
}
catch(err){
    console.log("File Reading error:",err.message);
}
}
const myWriteFile=(data)=>{
    try{
      fs.writeFileSync("dummy.txt",data);
      console.log("Successfully write file");
    }
    catch(err){
        console.log("File Writing Error:",err.message);
    }
}
const myAppendFile=(data)=>{
    try{
      fs.appendFileSync("dummy.txt",data);
      console.log("Appended data Successfully")
    }
    catch(err){
        console.log("File Appending Error:",err.message)
    }
}
const myDeleteFile=(filename)=>{
    try{
       fs.unlinkSync(filename);
       console.log("Successfully deleted file ",filename);
    }
    catch(err){
        console.log("File Deletion Error:",err.message)
    }
}

module.exports={
    myReadFile:myReadFile,
    myWriteFile: myWriteFile,
    myAppendFile: myAppendFile,
    myDeleteFile: myDeleteFile,
    username: "Ashish",
}