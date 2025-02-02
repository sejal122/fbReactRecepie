import {createSlice} from '@reduxjs/toolkit'
 export const counterSlice = createSlice({

    name:'counter',
    initialState:{
        count:0,
        name:'Rahul'
    },
    reducers:{
      increment:(state)=>{
         state.count=state.count+1
         
      },
      decrement:(state)=>{
         state.count=state.count-1
      }


    }
 })
 export const {increment,decrement}=counterSlice.actions
 export default counterSlice.reducer;