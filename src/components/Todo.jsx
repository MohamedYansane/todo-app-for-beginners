import { React, useState } from "react";
import taskwhite from "./task-list-white.png";
import { TodoForm } from "./TodoForm";
import { Todos } from "./Todos";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editId, setEditId] = useState(0);
  // Methodes
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const findEdit = todos.find((t) => t.id === editId);
      // en faisant la mise a jr on garde l'ancien id mais le todo on recupere celui de l'input
      const updateTodos = todos.map((t) =>
        t.id === findEdit.id
          ? (t = { id: t.id, todo: todo })
          : { id: t.id, todo: t.todo }
      );

      setTodos(updateTodos);
      //une fois que la mise à jour est faite on renitialise le setEdit
      setEditId(0);
      setTodo("");
      // si on ne met pas le return il creera un autre todo
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `t-${Date.now()}`, todo: todo }, ...todos]);
      // une fois l'insertion vider le input
      setTodo("");
      console.log(todos);
    } else {
      alert("The input field is empty");
    }
  };
  const handleEdit = (id) => {
    const t = todos.find((todo) => todo.id === id);
    setTodo(t.todo);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos([...deleteTodo]);
  };
  return (
    <div className="container-todo">
      <h1 className="font-jetbrain font-bold ">TO DO APP</h1>
      <section className="tasks-section p-1">
        <div className="card">
          <span className="manage flex-1  font-jetbrain">
            Manage your time well
          </span>
          <img src={taskwhite} alt="" srcSet="" className="" />
        </div>
        {/* Begining of our form */}
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
          editId={editId}
        />
        {/* End of our form */}

        {/* Begin of ul */}
        <Todos
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        {/* End of ul */}
      </section>
    </div>
  );
};
