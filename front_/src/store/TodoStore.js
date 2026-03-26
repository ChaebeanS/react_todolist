import { create } from 'zustand'
import axios from 'axios'

const todoStore = create((set) => ({
  data:[],

  save: async function(value){
    try{
        let res = await axios.post(process.env.REACT_APP_APIURL,value)
        set((item)=>({data:[...item.data, res.data.data]}));

        if(!res.data.success){throw new Error(res.data.msg);}
        
    }
    catch(error){
        console.log(`에러발생 : ${error}`);
        
    }
  },
  
  get: async function(value){
    const res = await axios.get(`${process.env.REACT_APP_APIURL}?sort=${value}`);
    set({data:res.data});
  },

  update: async function(){},

  del: async function(id){
    try{
      const res = await axios.delete(`${process.env.REACT_APP_APIURL}?id=${id}`);
      if(!res.data.success) throw new Error('error');
      set(function(item){
        return {data:item.data.filter(obj=>obj._id != id)};
      });
    }
    catch(error){

    }
  },

  completeTodo: async function(id){
    const res = await axios.put(`${process.env.REACT_APP_APIURL}/state?id=${id}`,{isdone:true});
    // const res = await axios.put(`http://localhost:4000/todo`,{id, isdone:true});
    set((item)=>{
      let updateData = item.data.map((obj)=>{
        if(obj._id == id){obj.isdone=true;}
        return obj;
      });
      return {data:updateData}
    });
  }

}))

export default todoStore;