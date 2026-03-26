import React from 'react'
import TodoItem from './TodoItem'
import todoStore from '../store/TodoStore'

function TodoList() {

  const{data} = todoStore();

  if(data.length === 0) return <div>준비중</div>; // 방법1

  return (
    <ul>
      {
        // data.length !=0 && <>hi</> // 방법2
        data.map((item)=><TodoItem key={item._id} item={item}/>)
        // <TodoItem />
      }
    </ul>
  )
}

export default TodoList

// * A && B : 앞에 블리언값(A)에 따라서 내용(B) 실행유무. if와 비슷. "A이면 B를 실행해"