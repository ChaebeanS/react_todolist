import './App.css';
import './style.scss';

import TodoHeader from './comp/TodoHeader';
import TodoList from './comp/TodoList';
import TodoInsert from './comp/TodoInsert';
import todoStore from './store/TodoStore';
import { useEffect } from 'react';


function App() {

  const {get} = todoStore();
  useEffect(()=>{ get('todo'); },[])
  // useEffect : 업데이트와 상관없이 함수(여기서는 get();을 뜻함)만 한번 실행하고 끝. '의존성 배열' 

  return (
    <div className="App">
      <TodoHeader />
      <TodoList />
      <TodoInsert />


    </div>
  );
}

export default App;
