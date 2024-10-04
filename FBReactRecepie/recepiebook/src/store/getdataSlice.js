import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchdata=createAsyncThunk("fetchdata",async ()=>{
    // const {MongoClient}=require('mongodb')
    // let uri="mongodb+srv://sejalmac:4xz6m3YBZ6XuXmcv@cluster0.h7joqyc.mongodb.net/?retryWrites=true&w=majority"
    // const client=new MongoClient(uri)
    // try{
    //     await client.connect();
    //     const db=client.db('Users')
    //     const mycollection=db.collection('users')
    //     const mydbdata=await mycollection.find().toArray()
    //     console.log(mydbdata)
    // }finally{
    //     await client.close()
    // }
    let data = axios.get('http://localhost:8000/recipes')
    .then(res=>{
        const data=res.data
        return data
    })
    return data
     




})

export const fetchdataSlice=createSlice({
name:'getdata',
initialState:{
    recepies:[],
    isError:false,
    isDataLoaded:false,
    isPending:false
},
extraReducers:(builder)=>{
builder.addCase(fetchdata.pending,(state)=>{
    console.log('DATA LOADING...')
    state.isPending=true;
})
builder.addCase(fetchdata.rejected,(state,action)=>{
    state.isError=true;
    console.error('Something went wrong!' + action)
    state.isPending=false;
})
builder.addCase(fetchdata.fulfilled,(state,action)=>{
    state.recepies=action.payload;
    state.isDataLoaded=true;
    state.isPending=false;
})
}

})

export default fetchdataSlice.reducer