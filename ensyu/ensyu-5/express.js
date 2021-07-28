/*
var express = require("express"); //expressモジュールをロード
var app = express();　//インスタンス化してappに代入

app.serialize(function() {
    db.test('CRATE TABLE time (id , name , timeDate , timeDate2 , total_time)');
     
})
*/
/*
let server = require('express')();
server.get('/', function(req, res){
    res.writeHead(200,{"Content-Type":"application/javascript"});
    res.sendFile(__dirname + '/index.html');
});
server.listen(3000);
*/


const http = require('http');
const fs = require('fs');

const indexHtml = fs.readFileSync('./index.html')
const scriptJs = fs.readFileSync('./script.js')

const server = http.createServer((req , res) => {

  switch (req.url) {
    case '/':
     res.writeHead(200 , {'Content-Type': 'text/html'});
     res.write(indexHtml);
     res.end();
     break;
     
     case '/script.js':
       res.writeHead(200 , {'Content-Type': 'application/javascript'});
       res.write(scriptJs);
       res.end();
       break;

       default:
         break;
  }
});

const port = 3000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});



