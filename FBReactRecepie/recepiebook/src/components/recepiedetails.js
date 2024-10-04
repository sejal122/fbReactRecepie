import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import './recepiedetails.css'
import Button from 'react-bootstrap/esm/Button'
function Recepiedetails() {
    const [recepie,setRecepie]=useState()
    const {id}=useParams();
   console.log(id)
   let baseurl='http://localhost:8000/recipes/'
   useEffect(()=>{
    axios.get(baseurl+id)
    .then(res=>{
        let data=res.data
        setRecepie(data)
        console.log(recepie)
    })
   
})
    return (
        <>
        
        <h2>{recepie?.name}</h2>
        <div className='container-fluid'>
            <div className='image'>
                <img src={recepie?.image}></img>
            </div>
            <div className='details'>

            </div>
        </div>
        <Button><Link to={'/updaterecepie/'+id}>Update recepie</Link></Button>
        </>
    )
}

export default Recepiedetails
