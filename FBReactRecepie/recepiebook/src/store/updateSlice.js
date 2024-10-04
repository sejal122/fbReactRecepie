import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const updateSlice=createSlice({

    name:'update',
    initialState:{
        updatedData:[],
        isUpdated:false,
    },
    reducers:{
        updateItem:async(state,action)=>{
           
            let newdata =JSON.stringify(action.payload[1])
           axios.patch(`http://localhost:8000/recipes/${action.payload[0]}`,newdata)
        .then((res)=>{
           
            console.log(res.data)
        })
        
        }
    }
})
export const {updateItem}=updateSlice.actions
export default updateSlice.reducer