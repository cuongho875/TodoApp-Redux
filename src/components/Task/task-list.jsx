import { query ,collection,getDocs,where } from '@firebase/firestore';
import React, { useEffect,useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth';
import { VIEW_ACTIVE, VIEW_ALL } from '../../filters/const';
import { auth,db } from '../../firebase';
import TaskItem from './task-item';
import { UndoTask } from '../../tasks/slice';

export default function TaskList() {
    const [tasks,setTasks]=useState([]);
    const filter=useSelector(state=>state.filters); 
    const [user] = useAuthState(auth)
    useEffect(()=>{
      if(user){
            if(filter==VIEW_ALL){
                fetchData("All")
              }
              else if(filter==VIEW_ACTIVE){
                fetchData(false)
              }
              else{
                fetchData(true)
              }
        }
    },[filter,tasks])  
    async function fetchData(filter){
      const q = query(collection(db, "todos"),
      where("uid","==",user.uid));
      const querySnapshot = await getDocs(q);
      let newTasks=[];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        if(doc.data().completed==filter){
          newTasks=[...newTasks,{
            id:doc.id,
            todo:doc.data().todo,
            completed:doc.data().completed,
          uid:doc.data().uid}
          ];
        }
        if(filter=="All"){
          newTasks=[...newTasks,{
            id:doc.id,
            todo:doc.data().todo,
            completed:doc.data().completed,
          uid:doc.data().uid}
          ];
        }
      });
      setTasks(newTasks)
  }

    return (
        <div className="task-list">
            <ul>
            {tasks.map((item,index)=>{
                return (<TaskItem key={index} task={item}/>)
            })}
            </ul>        
        </div>
    )
}
