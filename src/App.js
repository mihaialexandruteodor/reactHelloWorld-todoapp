import ToDoList from "./ToDoList";
import React, { useState, useRef, useEffect } from "react";   
//{useState} <- use state hook, used in rerendering
// {useRef} <- use references to HTML elements
//{useEffect} <- use effect hook, used everytime something changes
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])  // object destructuring; todos are the objects, setTodos is the function
  const todoNameRef = useRef()

  useEffect(() => {    //effect to load todos on refresh, written so it's called only once
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {   //effect to save todos locally so they don't disappear on page refresh
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))    
  }, [todos])
  
  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

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
    <ToDoList todos ={todos} toggleTodo = {toggleTodo} />
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
