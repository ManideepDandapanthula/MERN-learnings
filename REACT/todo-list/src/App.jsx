import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import{v4 as uuidv4} from "uuid"
import './App.css'
// import ToDoList from './ToDoList'
function App() {
  const [count, setCount] = useState(0)
  let [todos,setToDos] = useState([{task:"sample task",id:uuidv4(),isDone:false}]);
  let [newToDo,setNewToDo] = useState("");
  let addTask = ()=>{
      setToDos((prevTodos)=>{
        return [...todos,{task:newToDo,id:uuidv4(),isDone:false}] 
      })
      setNewToDo("");
  }
  let updateTodoValue = (event) =>{
    setNewToDo(event.target.value)
  }
  let deleteToDo = (id) =>{
    setToDos( todos.filter((todo) => todo.id != id));
    // console.log(copy);
  }

let upperCase = ()=>{
      setToDos( todos.map((todo)=>{
            return {
              ...todo,task:todo.task.toUpperCase()
            }
        }))  
}
let upperCaseOne=(id)=>{
    setToDos(todos.map((todo)=>{
      if(todo.id === id && !(todo.isDone)){
       return{...todo,task:todo.task.toUpperCase()}
      }
      else{
        return todo;
      }
    }))
}

let checkDone = (id) =>{
  setToDos(todos.map((todo)=>{
    if(todo.id === id){
      return{
        ...todo,isDone: true,
      }
    }
    else {
      return todo;
    }
  }))
}

  return (
    <>
        <input type="text" placeholder='Enter the task to do' value={newToDo} onChange={updateTodoValue}/> <button onClick={addTask}>Add</button>
        <br /><br />
        <br />
        <br />
        <hr />
        <h2>To Do List</h2>
        <ul>
          {
            todos.map((task)=>{
             return <li key={task.id}>
             <span style={task.isDone ? {textDecorationLine: "line-through"} : {}}>{task.task}</span>
                <button onClick={()=>deleteToDo(task.id)}>delete</button>
                {/* <button onClick={()=>{upperCaseOne(task.id)}}>UpperCase</button> */}
                <button onClick={()=>{checkDone(task.id)}}>Mark Done</button>
                </li>
            })
          }
        </ul>

        <br />
        <br />
        <button onClick={upperCase}>UpperCase</button>
    </>
  )
}

export default App
