import React ,{useEffect, useState} from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { updateItem } from '../store/updateSlice';
import { UseDispatch, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
function Updaterecepie() {
    const {id}=useParams();
    const navigate=useNavigate()
    const [newrecepie,setNewRecepie]=useState()
      const [counter, setCounter] = useState([]);
      const dispatch=useDispatch()
      useEffect(()=>{
        console.log(id)

        axios.get('http://localhost:8000/recipes/'+id)
        .then(res=>{
            let data=res.data
            setNewRecepie(data)
            console.log(data)
            console.log(newrecepie)
        })
       
    },[])
    
      const updatedata=(e)=>{
        e.preventDefault();
        dispatch(updateItem([id,newrecepie]))
        navigate('/')
       


    }
    const handleClick = (e) => {
        e.preventDefault()
        setCounter([...counter,  <Col sm="9" md='7' >
        <Form.Control type='text' id='ingredients' placeholder='Ingredients' onChange={(e)=>{setNewRecepie({...newrecepie,[e.target.id]:e.target.value})}}  />
      </Col>]);
        console.log(counter);
      };
    return (
        <div>
            <h1>Update information!</h1>
             <Form id='registrationForm' onSubmit={updatedata}>

<Form.Group as={Row} className="mb-3" controlId="name">
<Form.Label  column sm="3" md='5'>
  Name
</Form.Label>
<Col sm="9" md='7' >
  <Form.Control  type="text"  value={newrecepie?.name} placeholder="Name" onChange={(e)=>{setNewRecepie({...newrecepie,[e.target.id]:e.target.value})}}  />
  {/* name: pasta */}
</Col>
<div id="validationServerUsernameFeedback" class="invalid-feedback">
Please enter more than 3 characters.
</div>
</Form.Group>


<Form.Group as={Row} className="mb-3" controlId="ingredients">
<Form.Label sm="3" md='5' column >
Ingredients
</Form.Label>
{newrecepie?.ingredients.map((ing)=>{
  return <Col sm="9" md='7' >
  <Form.Control type='text' value={ing} placeholder='Ingredients' onChange={(e)=>{setNewRecepie({...newrecepie,[e.target.id]:e.target.value})}}  />
</Col>
})}

{counter?.map((c)=>{
  return c
})}
</Form.Group>
<button className='btn btn-info' onClick={handleClick}>+</button>
<Form.Group as={Row} className="mb-3" controlId="instructions" onChange={(e)=>{setNewRecepie({...newrecepie,[e.target.id]:e.target.value})}}>
{/* instructions:mbfjkdsbfjksbf  */}
<Form.Label sm="3" md='5' column >
  Instructions
</Form.Label>
<Col sm="9" md='7' >
<Form.Control as="textarea" rows={5} placeholder="Instructions" value={newrecepie?.instructions} />
</Col>
</Form.Group>


<Form.Group as={Row} className="mb-3" controlId="cuisine">
<Form.Label sm="3" md='5' column >
Cuisine
</Form.Label>
<Col sm="9" md='7' >
  <Form.Control type="text" value={newrecepie?.cuisine} placeholder="Cusine" onChange={(e)=>{setNewRecepie({...newrecepie,[e.target.id]:e.target.value})}} />
</Col>
</Form.Group>


<Form.Group as={Row} className="mb-3" controlId="submit">
<Col sm="12" md='12' >
  <Form.Control type="submit" className='btn btn-outline-info'/>
</Col>
</Form.Group>

</Form> 
        </div>
    )
}

export default Updaterecepie
