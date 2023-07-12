const fs = require ("fs");
//creating and writing to the file 
fs.writeFileSync("Sample.txt","This file is created by fs module ");

//reading file fs.readFile( filename, encoding, callback_function )
//use readFileSync for synchronous result
fs.readFile("./Sample.txt","utf8",function(err,data){
    console.log(data);
})

//deleting file fs.unlink( path, callback )

fs.unlink("./Sample.txt",function(err){
if(err){console.log (err);}
else{console.log("file delete successful")}
})
