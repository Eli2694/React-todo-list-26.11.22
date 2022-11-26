import React, { useState } from 'react'
import './toDoForm.css'

export const ToDoForm = (props) => {
 const [input,setInput] =  useState('');

 const handleSubmit = (e) =>{
  e.preventDefault(); // stop refresh the page

  props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

 setInput(''); 
 // after add todo button click the text will be clear.
 }

 const handleChange = (e) =>{
  console.log(e.target.value)
  setInput(e.target.value);


 }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
     <input type="text" 
     placeholder='Add a todo'
     value={input} 
     name='text' 
     className='todo-input'
     onChange={handleChange}
     />
     <button className='todo-button'>Add todo</button>
    </form>
  )
}
