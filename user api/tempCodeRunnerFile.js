in (__dirname+"/user.json");
    fs.readfile("filepath","utf8",(err,data)=>{
     
      console.log (data);
    })
    resp.sendFile(filepath);