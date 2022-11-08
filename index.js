// console.log("hello world")


// const http = require('http');

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World');
// }).listen(3000, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:3000/');

const express = require('express')
const app = express();
const server = app.listen(3000, function(){
    console.log("Express server start port 3000!!")
})

app.get('/test', function(req, res){
    // res.send('Hello World');
    // console.log('Hello World');

    const userName = req.params.id;
    //1. 데이터 베이스 연결
    const connection = mysql.createConnection ({
        host: rds.amazonaws.com,
        port: 3306,
        user: 'user',
        password: '00',
        database: 'database-1'
    }
    )
    connection.connect();

    //2. userInfo 테이블에 있는 정보 가져오기
    const GetUserQuery = 'SELECT id, pw, userName, phone, address FROM userInfo';
    const getUserResult = connectin.query(getUserQuery, function(err, rows, fields){
        if(err){
            res.send("회원정보가 조회되지 않습니다.")
        } else{
            console.log(rows[0])
            res.send(rows[0]);
        }
    });
});