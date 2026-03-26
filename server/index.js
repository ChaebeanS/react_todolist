const express = require('express') ;
const cors = require('cors');
const bodyParser = require('body-parser');
//---모듈---//

const todolist = require('./api/todolist.js');
const {connectDB, getDB} = require('./db/db_todolist');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


async function serverStart(){
    
    await connectDB();
    app.use('/todo',todolist);

    app.listen(4000, () => {
        console.log('Server is running on http://localhost:3000')
    })
}

serverStart();


// 서버페이지 먼저 실행돼야 프론트페이지 에러 안뜸
