import React ,{useState}from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios'

function Addnew() {
  let ok=true;
  const [counter, setCounter] = useState([

  ]);
    const [newrecepie,setNewRecepie]=useState({
        name:'',
        ingredients:[],
        instructions:[],
        cuisine:''
      })
      const handleClick = (e) => {
        e.preventDefault()
        setCounter([...counter,  <Col sm="9" md='7' >
        <Form.Control type='text' id='ingredients' placeholder='Ingredients' onChange={(e)=>{setNewRecepie({...newrecepie,[e.target.id]:e.target.value})}}  />
      </Col>]);
        console.log(counter);
      };
      const addnewdata=()=>{
        axios.post('http://localhost:8000/recipes',newrecepie)
        .then((res)=>{
            // setRecepies(res.data)
            console.log(res.data)
        })


    }

    return (
        <div>
            <Form id='registrationForm' onSubmit={addnewdata}>

        <Form.Group as={Row} className="mb-3" controlId="name">
        <Form.Label  column sm="3" md='5'>
          Name
        </Form.Label>
        <Col sm="9" md='7' >
          <Form.Control  type="text"  placeholder="Name" onChange={(e)=>{setNewRecepie({...newrecepie,[e.target.id]:e.target.value})}}  />
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
        <Col sm="9" md='7' >
          <Form.Control type='text' placeholder='Ingredients' onChange={(e)=>{setNewRecepie({...newrecepie,[e.target.id]:e.target.value})}}  />
        </Col>
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
        <Form.Control type="text" placeholder="Cuisine" />
      </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3" controlId="cuisine">
        <Form.Label sm="3" md='5' column >
        Cuisine
        </Form.Label>
        <Col sm="9" md='7' >
          <Form.Control type="text" placeholder="Cusine" onChange={(e)=>{setNewRecepie({...newrecepie,[e.target.id]:e.target.value})}} />
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

export default Addnew
