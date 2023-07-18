
//creating middleware
const path = require ('path');
const express = require("express");
const app = express();

const mylogger = function (req, resp, next){
    if(req.query.age<18){
    resp.send('<h1>You are not allowed to access (Underage)</h1>')}
    
    else if (req.query.age>=18){next(); }
    
    else {
        resp.send('<h1>Enter your age</h1> ')
    }
}

app.use(mylogger);

app.get('/',(req,resp)=>{
    var filepath = path.join(__dirname,'/index.html');
    resp.sendFile(filepath);
});

app.get('/home',(req,resp)=>{
    resp.send('<h1>welcome to home page</h1>');
});

app.get('/about',(req,resp)=>{
    resp.send('<h1>welcome to about page</h1>');
});


app.listen(8000,()=>{
    console.log("Listenning on port number 80")
});