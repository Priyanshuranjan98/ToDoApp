//import './App.css';
import ToDoInput from './component/ToDoInput';
import { useState } from 'react';
import ToDoList from './component/ToDoList';

function App() {
  const[todoList,setTodoList]=useState([]);
  let addList=(inputText)=>{
    setTodoList([...todoList,inputText])
  }
  const deleteList=(key)=>{
    let newListToDo=[...todoList]
    newListToDo.splice(key,1)
    setTodoList(newListToDo)
  }
  return (
    <>
    <div className="main-container">
    <div className="center-container">
    <ToDoInput addList={addList}/>
    <h1>TODO APP</h1>
    <hr/>
    {todoList.length>0&&todoList.map((listItem,i)=>{
      return(
        <ToDoList index={i} key={i} item={listItem} deleteItem={deleteList} />
      )
    })}
    </div>
    </div>
    </>
  );
}

export default App;
