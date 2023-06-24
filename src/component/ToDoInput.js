import React,{useState} from 'react'
import App from '../App';

function ToDoInput(props) {
  const[inputText,SetInputText]=useState("");
  return (
    <>
    <input
    type='text'
    placeholder='Enter The Task'
    value={inputText}
    onChange={(e)=>{
      SetInputText(e.target.value);
    }}
    >
    </input>
    <button 
        onClick={()=>{
          props.addList(inputText)
          SetInputText("");
        }}
    style={{backgroundColor:"blue"}}>+</button>
    </>
  )
  
}

export default ToDoInput