import React from 'react'
import { useEffect } from 'react';
import TaskForm from '../../components/Task/task-form';
import Filters from '../../components/Filters'
import {auth, db} from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import TaskList from '../../components/Task/task-list';
import './task-page.scss'
import { useDispatch, useSelector } from 'react-redux';
import { ClearHistory, UndoTask } from '../../tasks/slice';
export default function TaskPage(props) {
    const [user,loading,error]=useAuthState(auth);
    const navigate=useNavigate();
    const history=useSelector(state=>state.history); 
    const dispatch=useDispatch();
    useEffect( ()=>{
      if(!user){
        navigate('login')
      }
      setInterval(()=>{
        dispatch(ClearHistory())
      },60000)
    },[user])   
    const HandleUndoTask=()=>{
      dispatch(UndoTask());
    } 
  return (
    <div className="task">
          {history?(<div className="undo-task" onClick={HandleUndoTask}>
            Task Deleted <span>Undo</span>
          </div>):''}
        <TaskForm/>
        <Filters/>
        <TaskList/>
    </div>
  )
}
