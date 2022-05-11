
// 第一個區塊 內建模組
const path = require('path');
// const http = require('http');

// 第二個區塊 第三方模組(套件)

const express = require('express');
// 第三個區塊 自建模組
// const hello = require('./hello');

////////////////////////////////////////////////////////////////

// const server = http.createServer((req, res) => {
	// console.log('第一個參數是瀏覽器對 web server 的 request', req);
	// console.log('第二個參數是 web 要response 給瀏覽器的內容', res);
    // if (req.url === '/') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
         //MIME type 
        //告訴browser要怎麼回傳 text/plain會把html一起顯示出來
// 	    return res.end('<h1>This is home page</h1>');
     
//     } 
// 		if (req.url === '/login') {
//             res.stautsCode = 200;
//         return res.end('This is login page');
//     } 
// 	res.end();
// });

// server.listen(3000, () => {
// 	console.log('running server on port 3000');
// });

// const url = require('url');

// console.log(url.parse('https://www.pexels.com/zh-tw/photo/4815143/'));


const app = express();


//middleware 
app.use((req,res,next)=> {
    console.log('Hello!');
    next()
});
app.use((req,res,next)=> {
    console.log('World!');
    next()
});

// 使用 Express 創建 Web Server 並設定路由 
app.get('/', (req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write('<head><meta charset="utf-8" /></head>')
    // res.write('<body>')
    // res.write('<h1>這是首頁</h1>')
    // res.write('</body>')
    res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});
