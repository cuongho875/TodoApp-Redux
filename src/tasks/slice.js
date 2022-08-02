import { UndoTaskSelector } from "./selectors";
const { createSlice } = require("@reduxjs/toolkit");

const HistorySlice=createSlice({
    name:"history",
    initialState:null,
    reducers:{
        RemoveTask(state,task){
            return state=task;
        },
        ClearHistory(state){
            return state=null;
        },
        UndoTask(state){
            if(state){
                UndoTaskSelector(state.payload)
            }
            return state=null;
        }
    }
})
export const {RemoveTask,ClearHistory,UndoTask}=HistorySlice.actions;
export default HistorySlice;