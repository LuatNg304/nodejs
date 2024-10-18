//index.js nay se demo tao server bang expressjs
//expressjs la 1 thang phat trien tren http module
//
const express = require("express");
//dung express de tao server
const app = express();
//dung port
const PORT = 4000;

app.get("/user", (req,res) =>{
    res.send("Chi co 1  user la Le Ho Diep");
});
app.get("/", (req,res) =>{
    res.send("Ahihi xin chao");
});
app.listen(PORT, () =>{

    console.log("Serevr duoc mo o port :" + PORT);  
});