import React from 'react'

function ToDoList(props) {
  return (
    <li>{props.item}
    <span className='icons'>
        <i className="fa-regular fa-trash-can"
        onClick={(e)=>{
            props.deleteItem(props.index)
        }}
        ></i>
    </span>
    </li>
  )
}

export default ToDoList