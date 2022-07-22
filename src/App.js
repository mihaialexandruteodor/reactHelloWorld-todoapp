import ToDoList from "./ToDoList";
import React, { useState, useRef} from "react";   //{useState} <- use state hook, used in rerendering
// {useRef} <- use references to HTML elements
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])  // object destructuring; todos are the objects, setTodos is the function
  const todoNameRef = useRef()
  
  function handleAddTodo(evt){
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <>
    <ToDoList todos ={todos} />
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
