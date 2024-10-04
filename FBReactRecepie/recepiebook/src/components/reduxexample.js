import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement } from '../store/counterSlice'
function Reduxexample() {
    const counter =useSelector((state)=>state.counter.count)
    const dipatch=useDispatch()
    console.log(counter)
   
    function inc(){
       dipatch(increment())
    }
    function dec(){
        dipatch(decrement())
    }
    return (
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={inc}>+</button> <br/>
            <button onClick={dec}>-</button>
        </div>
    )
}

export default Reduxexample
