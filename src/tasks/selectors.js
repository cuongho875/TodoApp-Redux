import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from "@firebase/firestore"
import { db } from "../firebase"

export const createTask= async (todo,uid)=>{
    const q= collection(db,"todos")
    await addDoc(q,{
        uid:uid,
        todo:todo,
        completed:false
    })
}
export const completedTask= async (id)=>{
    const q= doc(db,"todos",id)
    const completed=await (await getDoc(q)).data().completed;
    if(completed){
        await updateDoc(q,{
            completed:false
        })
    }
    else{
        await updateDoc(q,{
            completed:true
        })
    }
}
export const editTask= async (todo,id)=>{
    const q= doc(db,"todos",id)
    await updateDoc(q,{
        todo:todo
    })
}
export const DeletedTask= async (id)=>{
    const q= doc(db,"todos",id)
    await deleteDoc(q)
}
export const UndoTaskSelector= async (task)=>{
    const q= collection(db,"todos")
    await addDoc(q,{
        uid:task.uid,
        todo:task.todo,
        completed:task.completed
    })
}
