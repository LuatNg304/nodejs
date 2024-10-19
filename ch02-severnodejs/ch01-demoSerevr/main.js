//file main nay minh se tao 1 server http module, chua cac method cung nhu cac bien cho viec tao server
//http module la 1 module core
const http = require("http");
const PORT = 4000;
//tao server voi http
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(`{"message":"Json ne"}`);
  //hao dong lenh 7 va 8 dung de sever tra ve trang jthai json
});

//cho server ket noi voi cai port nay, de mo con ket noi ra
server.listen(PORT, () => {
  console.log("Conect complete:" + PORT);
});
