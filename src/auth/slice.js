import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:null,
    reducers:{
        LogIn(state,uid,name,authProvider,email) {
            return state={
                uid:uid,
                name:name,
                authProvider:authProvider,
                email:email
            }
        },
        LogOut(state){
            return state=null
        }
    }
})
export const {LogIn, LogOut} = userSlice.actions // export action
export default userSlice //ngầm hiểu chúng ta đang export userSlice