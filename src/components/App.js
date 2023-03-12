import React, { useState } from 'react'
import '../styles/App.css';

function ToDo({todoid,createdAt}) {
  return (<tr>
    <td>
      <p>{todoid}</p>
    </td>
    <td>
      <input placeholder="Enter the text here" />
    </td>
    <td>
      <p>{createdAt}</p>
    </td>
  </tr>)
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);
  const reverseOrder=()={
  setTodos([...todos].reverse());
  }

  return (
    <div id="main">
      <button onClick={ reverseOrder}>Reverse</button>
      <table>
        <tbody>
       
{
    todos.map((todo)=>(
     <ToDo key={todo.id} todoid={todo.id} createdAt={todo.createdAt}/>)
)}
     </tbody>
      </table>
    </div>
  )
}


export default App;
