// index giong nhu main 
//gio muon sai ham sum o trong utils thi lam sao?
// moi file trong js la 1 module
// Nhung gi co trong co trong module deu la private can duoc import

//ket noi voi util module bang ham require
const utils = require("./util");
//utils luc nay la 1 object co ham sumFunction
//duoc goi mudule common js neu su dung require


//const result = utils.sumFunction(1,5)
const result = sumFunction(1,5)
//detructoring dung thang luon kh can cham
console.log(result);
