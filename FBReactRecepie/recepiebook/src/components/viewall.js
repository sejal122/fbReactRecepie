import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleLeft, faTrash} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { fetchdata } from '../store/getdataSlice';
import { deleteItem } from '../store/deleteSlice';
import {useSelector,useDispatch} from 'react-redux'
import './viewall.css'
function Viewall() {
    const dispatch=useDispatch()

    // const [recepies,setRecepies]=useState(null)
        
    let recepies=useSelector((state)=>state.getdata.recepies)
    // setRecepies(storedata)
    useEffect(()=>{
        // axios.get('http://localhost:8000/recipes')
        // .then(res=>{
        //     let data=res.data
        //     setRecepies(data)
        //     console.log(recepies)
        // })

       dispatch(fetchdata())
    },[])
    const deleterecepie=(id)=>{
      dispatch(deleteItem(id))
    
    }
    return (
        <>
        <h1>View all recepies</h1>
        <div id='container-fluid'>
        {recepies?.map((recepie)=>{
            return  <Card key={recepie.id} style={{ width: '23rem',margin:'5px' }}>
            <Card.Img variant="top" src={recepie.image} height={'280px'} />
            <Card.Body>
              <Card.Title><h3>{recepie.name}</h3></Card.Title>
              <Card.Text>
               {recepie.tags?.map((tag)=>{
                return   <Button style={{marginLeft:'6px'}} variant="secondary" size="sm">
                # {tag}
              </Button>
               })}<br/><br/>
                 <Button variant='light'>
      Ratings :  <Badge bg="warning">{recepie.rating}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
    
              </Card.Text>
              <Button variant="light"><Link to={'/recepiedetail/'+recepie.id}>View Instructions</Link></Button>
              <Button variant='danger' onClick={()=>deleterecepie(recepie.id)} ><FontAwesomeIcon icon={faTrash}/></Button> 
            </Card.Body>
          </Card>
        })}
       
        </div>
      
       
        </>
    )
}

export default Viewall


