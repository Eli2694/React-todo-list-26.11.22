import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import './toDo.css'

export const ToDo = ({todos,removeTodo,completeTodo}) => {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />

      </div>
    </div>
  ));
};
    
  

