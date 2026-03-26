import React from 'react'
import todoStore from '../store/TodoStore'

function TodoItem({item}) {
  const {del,completeTodo} = todoStore();

  return (

    <li style={{color:item.isdone && 'red'}}>
        <div className='con'>{item.content}</div>
        <div className='bnt'>
          <button>수정</button>
          <button onClick={()=>del(item._id)}>삭제</button>
          <button onClick={()=>completeTodo(item._id)}>완료</button>
        </div>
    </li>
  )
}

export default TodoItem