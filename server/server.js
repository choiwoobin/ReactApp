const express = require("express");
const app = express();
const {Pool}   = require("pg");   // postgresql
const PORT = 3001;
const cors = require('cors');

const db = new Pool({
    host: "172.27.111.14", // 호스트
    user: "serpcmsdev",      // 데이터베이스 계정
    password: "serpcmsdev123",      // 데이터베이스 비밀번호
    database: "serpcmsdevdb",  // 사용할 데이터베이스
    port:54311 //port
});

db.connect(err => {
    if(err) console.log(err);
    else{
        console.log('connect')
    }
})

app.use(express.json());
app.use(cors({
    origin: '*', // 모든 출처 허용 옵션. true 를 써도 된다.
}))

// post 요청 시 값을 객체로 바꿔줌
app.use(express.urlencoded({ extended: true })) 

// 서버 연결 시 발생
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

app.get('/', function(req, res){
    res.send('connect');
});

app.post("/api/customers/select", (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    const refs = req.body.data;
    const sqlQuery = 'select use_intt_id, biz_no, use_intt_nm from intt_ldgr where use_intt_id = $1';    
    let values = [refs.use_intt_id];
    db.query(sqlQuery, values, function (err, rows, fields) {
        if (err) console.log(err);
        res.send(rows);
      });
      
});
