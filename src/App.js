import ToDoList from "./ToDoList";
import React, { useState} from "react";   //{useState} <- use state hook, used in rerendering

function App() {
  const [todos, setTodos] = useState([])  // object destructuring; todos are the objects, setTodos is the function
  return (
    <>
    <ToDoList />
    <input type="text" />
    <button>Add Todo</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
