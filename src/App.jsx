import React from 'react'
import From from './components/From'
import TodoShow from './components/TodoShow'
import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([]);

  const [id,setId] = useState('')

  const onDelete = (id) =>{
    setTodos(todos.filter((d)=>d.id !== id))
  }

  return (
    <>
    <div className="container text-center">
      <h1 className='text-center'>TO DO LIST REACT-CRUD</h1>
      <From todos={todos} setTodos={setTodos} id={id} setId={setId}></From>
      <TodoShow onDelete={onDelete} todos={todos} setId={setId}></TodoShow>
    </div>
    </>
  )
}

export default App