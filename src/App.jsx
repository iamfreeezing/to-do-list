import { useState } from "react"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"

function App() {

  const [todos, setTodos] = useState([])

  function handleAdd(todos, inp) {

    const newList = [...todos, inp]
    setTodos(newList)

  }

  function handleDelete(todos, index) {
    console.log('calling handleDelete')
    const newList = todos.filter((value, indexi) => indexi !== index)
    setTodos(newList)
  }

  return (
    <main>
      <Todoinput todos = {todos} handleAdd = {handleAdd}/>
      <Todolist todos = {todos} handleDelete = {handleDelete}/>
    </main>
  )

}

export default App