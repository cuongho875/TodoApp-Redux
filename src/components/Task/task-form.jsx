import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { createTask } from '../../tasks/selectors';
import './task.scss'
export default function TaskForm() {
  const refInput=React.createRef();
  const [value,setValue]=useState("");
  const [user]=useAuthState(auth);
  const getInputVal=()=>{
    setValue(refInput.current.value)
  }
  const HandleAddTask=(event)=>{
    event.preventDefault();
    if(value!=""){
      createTask(value,user.uid)
      setValue("")
    }
  }
  
  return (
    <form className="task-form" onSubmit={HandleAddTask}>
        <input className="task-input" 
        value={value}
        ref={refInput} type="text" 
        placeholder="What needs to be done?" 
        onChange={getInputVal}   
        />
    </form>
  )
}
