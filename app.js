
// 第一個區塊 內建模組
const path = require('path');
// const http = require('http');

// 第二個區塊 第三方模組(套件)

const express = require('express');
const bodyParser = require('body-parser');
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
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req,res,next)=> {
    console.log('Hello!');
    next()
});
app.use((req,res,next)=> {
    console.log('World!');
    next()
});
app.get('/', (req, res) => {
    res.status(200)
        .sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
    res.status(200)
        .sendFile(path.join(__dirname, 'views', 'login.html'));
});
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.redirect('/');
    } else {
        console.log('欄位尚未填寫完成！')
    }
});

app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});
