const express = require('express') // 서버에서 객체 import 방법
const {getDB} = require('../db/db_todolist');
const { ObjectId } = require('mongodb');
const todolist = express.Router(); // (페이지 분리)


todolist.get('/', async(req, res) => { // (클라이언트 요청시 처리할 함수)
  const sort = req.query.sort;
  let filter;

  // 방법1
  if(sort =='all'){filter={};}
  else if(sort === 'true'){filter={isdone:true}}
  else {filter={isdone:false}}

  /* 방법2
  switch(sort){
    case'all':filter={};break;
    case'true':filter={isdone:true};break;
    default:filter={isdone:false};
  }*/

  const data = await getDB().collection('todos').find(filter).toArray(); // 실데이터가 들어있는 콜렉션 조회
  res.send(data)
})


todolist.post('/', async(req, res) => { 
    try{
      const result = await getDB().collection('todos').insertOne(req.body);
      // console.log(result);
      const data = {...req.body, _id:result.insertedID};  
    
      res.send({success:true, data})
    } 
    catch(error){
      res.send({success:false, msg:error.message})       
    }  

})

todolist.delete('/', async(req, res) => { 
  const {id} =req.query

  try{
    const result = await getDB().collection('todos').deleteOne({_id:new ObjectId(id)});
    res.send({success:true});

  } 
  catch(error){
    res.send({success:false});
            
  }  

})

todolist.put('/state', async(req, res) => { 
  const {id} =req.query;
  const {body} =req.body;
  
  try{
    const result = await getDB().collection('todos').updateOne({_id:new ObjectId(id)},{$set:req.body});
    res.send({success:true});
  } 
  catch(error){
    res.send({success:false}); 
  }  

})

module.exports = todolist; // 서버에서 import 보내는 방법