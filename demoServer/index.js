// const http = require("http");
// const PORT = 4000;
// //tao server voi http
// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   res.end(`{"message":"Json ne"}`);
//   //hao dong lenh 7 va 8 dung de sever tra ve trang jthai json
// });

// //cho server ket noi voi cai port nay, de mo con ket noi ra
// server.listen(PORT, () => {
//   console.log("Conect complete:" + PORT);
// });
const express = require("express");
const PORT = 4000;
const app = express();
app.get((req, res) => {
  res.send("hello");
});
app.listen(PORT, () => {
  console.log("hello connected");
});
