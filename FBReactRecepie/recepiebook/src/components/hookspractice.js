import React, { useEffect, useRef, useState,useContext ,createContext} from 'react'
const counterContext = createContext();
function Hookspractice() {
    const [counter,setCounter]=useState(5) //a,b
    const refCount = useRef(5)
    const myelement=useRef();
    const[inputValue,setInputValue]=useState('')
    
    useEffect(()=>{
            // setTimeout(()=>{
               
            //     console.log(counter)
            // },2000)
            refCount.current=refCount.current+1
    })
    const handleChange=()=>{
        console.log()
        myelement.current.focus()
    }
    return (
        <counterContext.Provider value={counter}>
 <div>
            useEffect runs {counter} times!
            <button onClick={()=> setCounter((counter)=>counter+1)}>+</button>
            <input type='text'  ref={myelement} value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
            <h2>{refCount.current}</h2>
            <Component2 /> 
        </div>
        </counterContext.Provider>
       
    )
}

function Component2(){
    return (
        <div>
            <h1>comp 2</h1>
            <Component3 />
        </div>
    )
}
function Component3(){
    return (
        <div>
            <h1>Comp 3</h1>
            <Component4 />
        </div>
    )
}
function Component4(){
    const mycounter=useContext(counterContext)
    return (
        <div>
            <h1>Comp4 </h1>
            <h2>Counter = {mycounter} </h2>
        </div>
    )
}

export default Hookspractice
