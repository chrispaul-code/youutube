import { createSlice } from "@reduxjs/toolkit";

const appSlice =createSlice({
    name:"app",
    initialState:{
        isMeanuOpen:false
    },
    reducers:{
        toggleMeanu:(state)=>{
            state.isMeanuOpen=!state.isMeanuOpen
        },
        closeMenu:(state)=>{
          state.isMeanuOpen=false;
         }
    }
})

export const{toggleMeanu , closeMenu}=appSlice.actions;
export default appSlice.reducer