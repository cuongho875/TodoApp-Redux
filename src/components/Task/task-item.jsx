import { faCheck, faPen, faRemove, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{createRef, useState} from 'react'
import { useDispatch } from 'react-redux';
import { completedTask, DeletedTask, editTask } from '../../tasks/selectors';
import { RemoveTask } from '../../tasks/slice';
export default function TaskItem(props) {
    const [actionEdit,setActionEdit]=useState(false);
    const [valueInput,setValueInput]=useState(props.task.todo)
    const className=props.task.completed?"task-item-left completed":"task-item-left";
    const dispatch=useDispatch()
    const refInput=createRef();
    const getInputVal=()=>{
        setValueInput(refInput.current.value)
        console.log(valueInput)
    }
    const HandleCompleted=()=>{
        completedTask(props.task.id)
    }
    const HandleDeleted=()=>{
        dispatch(RemoveTask(props.task))
        DeletedTask(props.task.id)
    }
    const HandleEdit=()=>{
        if(!actionEdit){
            setActionEdit(true)
        }
        else{
            setActionEdit(false)
            setValueInput(props.task.todo)
        }
    }
    const HandleEditTask=(event)=>{
        event.preventDefault();
        if(valueInput!==""&&valueInput!==props.task.todo){
            editTask(valueInput,props.task.id)
          setActionEdit(false)
        }
        else{
            editTask(props.task.todo,props.task.id)
            setActionEdit(false)
        }
      }
  return (
    <li className="task-item">
        <div className="task-item-content" 
        style={{"display": actionEdit ? 'none' : 'flex'}}>
            <div className={className}>
                <div className="cell" onClick={HandleCompleted}>
                    <FontAwesomeIcon icon={faCheck} size="xs"/>
                </div>
                <div className="task-name">
                    {props.task.todo}
                </div>
            </div>
            <div className="task-item-right">
            <label htmlFor="input">
                <div className="cell" onClick={HandleEdit}>
                    <FontAwesomeIcon icon={faPen} size="xs"/>
                </div>
                </label>   
                <div className="cell" onClick={HandleDeleted}>
                    <FontAwesomeIcon icon={faTrash} size="xs"/>
                </div>
            </div>
        </div>
        <div className="task-item-edit" 
        style={{"display":actionEdit ? 'flex' : 'none'}}>
            <form action="" onSubmit={HandleEditTask}>
                <input id="input" ref={refInput} type="text"
                 value={valueInput} autoFocus
                 onChange={getInputVal}/> 
            </form>     
            <div className="cell" onClick={HandleEdit}>
                
                <FontAwesomeIcon icon={faRemove} size="xs"/> 
                    
            </div>    
        </div>
    </li>
  )
}
