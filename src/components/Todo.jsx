import {React, useState} from 'react'
import taskwhite from './task-list-white.png'

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editId, setEditId] = useState(0);
  // Methodes
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(editId){
      const findEdit = todos.find(t => t.id === editId);
      // en faisant la mise a jr on garde l'ancien id mais le todo on recupere celui de l'input
      const updateTodos = todos.map((t)=>
        t.id === findEdit.id ? (t = {id:t.id, todo:todo}): {id:t.id, todo:t.todo}

      );

      setTodos(updateTodos);
      //une fois que la mise à jour est faite on renitialise le setEdit
      setEditId(0);
      setTodo("");
      // si on ne met pas le return il creera un autre todo
      return;
    }

    if(todo!== "")
    {
      setTodos([{id: `t-${Date.now()}`,todo:todo}, ...todos]);
      // une fois l'insertion vider le input 
      setTodo("");
      console.log(todos);
    }
    else{
      alert("The input field is empty");
    }
  }
  const handleEdit = (id) =>{
    const t = todos.find(todo => todo.id === id);
    setTodo(t.todo);
    setEditId(id);
  }

  const handleDelete = (id) =>{
    const deleteTodo =  todos.filter(todo => todo.id !== id);
    setTodos([...deleteTodo]);
  }
  return <div className="container-todo">
    <h1 className='font-jetbrain font-bold'>TO DO APP</h1>
    <section className='tasks-section p-1'>
      <div className="card">
          <span className='manage flex-1  font-jetbrain'>Manage your time well</span>
          <img src={taskwhite} alt="" srcSet="" className="" />
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter a task" className="p-3 focus: outline-none font-jetbrain"/>
        <button type="submit" className='' >
          {
            editId === 0 ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 add-icon">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          }
          
        </button>
      </form>
      <ul className="list-none p-0 m-0 ">
          {
            todos.map(keys =>{
              return(
                <li className=" flex items-center" key={keys.id}>
                <span className="flex-1 font-jetbrain text-sm"> {keys.todo}</span>
                <button className='btnEdit' onClick={()=>handleEdit(keys.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </button>
                <button className='btnDelete' onClick ={() => handleDelete(keys.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
      
                </button>
              </li>
              )
            })
          }
      </ul>
    </section>
  </div>
}
