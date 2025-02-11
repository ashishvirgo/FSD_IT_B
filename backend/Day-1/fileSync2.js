const {myReadFile, myWriteFile, myAppendFile, myDeleteFile, username}=require("./fileSync1")
myReadFile();
const data="MY FSD Class";
myWriteFile(data);
myReadFile();
myAppendFile(data);
myReadFile();
myDeleteFile("dummy.txt")
console.log("User name=",username);