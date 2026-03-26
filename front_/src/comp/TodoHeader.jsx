import React from 'react'
import todoStore from '../store/TodoStore';

function TodoHeader() {
  const {get} = todoStore(); 

  return (
    <div className='header'>
        <h2><span>Todo List</span></h2>
        <div className='sort'>
            <div>할일(6) / 완료(6)</div>
            <div className='btn'>
                <button onClick={e => get('false')}>진행중</button>
                <button onClick={e => get('true')}>완료</button>
                <button onClick={e => get('all')}>전체</button>

            </div>
        </div>
    </div>
  )
}

export default TodoHeader