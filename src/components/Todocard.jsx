export default function Todocard({todos, index, listItem, handleDelete}) {
  return (
      <div className="todocard">
        <p>{listItem}</p>
        <div className="cardbuttons">
            <button><i className="fa-solid fa-pen-to-square"></i></button>
            <button onClick={() => handleDelete(todos, index)}><i className="fa-regular fa-trash-can"></i></button>
        </div>
        
      </div>
  )
}
