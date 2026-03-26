import React, { useState } from 'react'
import todoStore from '../store/TodoStore';

function TodoInsert() {
  const {save} = todoStore(); 
  const [ip,setIp] = useState(''); // 수정기능때문에

  function handleSubmit(e){
    e.preventDefault();
    if(!ip){
      alert('글을 작성하세요');
      return;
    }
    
    const today = new Date();
    const date = new Intl.DateTimeFormat(
      'ko-KR',{month:'short', day:'numeric'}
      // year, month, day, hour, miminute, second
    ).format(today); // .replace = 내용변경 -> .replace('오전','T'), .replaceAll(' ','') 등  

    save({content:ip,date,isdone:false})
    .then(()=>{
      setIp('');
      alert('저장완료!')
    })
    
  }

  return (
    <div className='form'>
        <form onSubmit={e=>handleSubmit(e)}>
            <input type='text' value={ip} onChange={e=>setIp(e.target.value)} />
            {/* value 와 onChange = 세트 */}
            <button>추가</button>
        </form>
    </div>
  )
}

export default TodoInsert