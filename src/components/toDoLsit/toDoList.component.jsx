import React, { useState } from 'react'
import { ToDo } from '../toDo/toDo.component';
import { ToDoForm } from '../toDoForm/toDoForm.components';
import './toDoList.css'

export const ToDoList = () => {
 const [todos,setTodos] = useState([]);

 const addToDo = todo => {
  // todo = {id: Math.floor(Math.random() * 10000), text:input},
  if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    } // if no letter has been written return nothing
  let newTodos = [...todos,todo];
  setTodos(newTodos);
  console.log(newTodos);
 }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

   const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  return (
    <>
    <h1>What's The Plan For Today?</h1>
    <ToDoForm onSubmit={addToDo} />
    <ToDo 
    todos={todos} 
    completeTodo={completeTodo}
    removeTodo={removeTodo}/>
    </>
  )
}
