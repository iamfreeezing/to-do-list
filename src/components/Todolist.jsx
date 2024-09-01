import Todocard from "./Todocard"
export default function Todolist({todos, handleDelete}) {
  function genJSX(value, index) {
    return (
        <li key = {index}><Todocard todos = {todos} index = {index} listItem = {value} handleDelete = {handleDelete}/></li>
    )
}

  return (
    <div className = "main-list">
    <ul>
        {todos.map(genJSX)} 
    </ul>
    </div>
  )
}

