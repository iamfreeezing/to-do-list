import { useState } from "react"

export default function Todoinput({todos, handleAdd}) {

    const [inp, setInp] = useState('')
    
      
  return (
    <form className="main-form">
        <input type="text" value = {inp} onChange = {(e) => setInp(e.target.value)} ></input>
        <button onClick = {(e) => {e.preventDefault(); setInp(''); handleAdd(todos, inp)}}>Add</button>
    </form>
  )
}
