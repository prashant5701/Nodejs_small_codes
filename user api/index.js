const express = require ("express");
const app = express();
const fs = require ("fs");
const path = require ("path");

app.get("/",(req,resp)=>{

    const filepath = path.join (__dirname+"/user.json");
    fs.readFile(filepath,"utf8",(err,data)=>{
     
      console.log (data);
    resp.send(data);

    })
});


app.listen (80);