// const url = "mongodb+srv://scbean25_db_user:Dnjstnd2@cluster0.nq78i5d.mongodb.net/?appName=Cluster0";
const { MongoClient } = require('mongodb');

const url = "mongodb://scbean25_db_user:a123456@ac-caqznwy-shard-00-00.nq78i5d.mongodb.net:27017,ac-caqznwy-shard-00-01.nq78i5d.mongodb.net:27017,ac-caqznwy-shard-00-02.nq78i5d.mongodb.net:27017/?ssl=true&replicaSet=atlas-rtppsn-shard-0&authSource=admin&appName=Cluster0";
const client = new MongoClient(url);

let db;
async function connectDB(){
    try{
        await client.connect(); // 몽고접속
        db = client.db('todolist'); // 프로젝트 db 활성화
    
        console.log('접속완료');
    }
    catch(error){
        console.error(error)        
    }
}

function getDB(){
    return db;
}


module.exports = {connectDB, getDB};