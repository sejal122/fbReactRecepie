import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './registeruser.css'
function Registeruser() {
const [formdata,setFormData]=useState({
  Username:'',
  Email:'',
  Password:'',
  gender:''
})
  const handleSubmit=(e)=>{

    e.preventDefault()
    console.log(formdata)
  }
  let emailregex=/^[^@]+@[^@]+\.[^@]+$/
  const handleBlur=()=>{

    if(formdata.Username.length < 3){
      let usernameinput=document.getElementById('Username')
      usernameinput.classList.add('is-invalid')
      let messagediv=document.getElementById('validationServerUsernameFeedback')
      messagediv.style.display='block'
    }
    else{
      console.log('valid')
      let usernameinput=document.getElementById('Username')
      usernameinput.classList.remove('is-invalid')
      usernameinput.classList.add('is-valid')
      
      let messagediv=document.getElementById('validationServerUsernameFeedback')
      messagediv.style.display='none'
    }
    if(emailregex.test(formdata.Email)){
      console.log('valid password')
    }
    else{
      console.log('invalid p')
    }
    
    console.log('field blured')
  }
    return (
        <div>
            <h1>Registration Form!</h1><br/>
        <Form id='registrationForm' onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="Username">
        <Form.Label  column sm="3" md='5'>
          Username
        </Form.Label>
        <Col sm="9" md='7' >
          <Form.Control  type="text"  placeholder="Username" onChange={(e)=>{setFormData({...formdata,[e.target.id]:e.target.value})}}  onBlur={handleBlur}/>
          
        </Col>
        <div id="validationServerUsernameFeedback" class="invalid-feedback">
        Please enter more than 3 characters.
      </div>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="Email">
        <Form.Label sm="3" md='5' column >
          Email
        </Form.Label>
        <Col sm="9" md='7' >
          <Form.Control type='email' placeholder='email@example.com' onChange={(e)=>{setFormData({...formdata,[e.target.id]:e.target.value})}} onBlur={handleBlur} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="Password" onChange={(e)=>{setFormData({...formdata,[e.target.id]:e.target.value})}}>
        <Form.Label sm="3" md='5' column >
          Password
        </Form.Label>
        <Col sm="9" md='7' >
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="Password2">
        <Form.Label sm="3" md='5' column >
          Re-enter Password
        </Form.Label>
        <Col sm="9" md='7' >
          <Form.Control type="password" placeholder="Password" onChange={(e)=>{setFormData({...formdata,[e.target.id]:e.target.value})}} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="Password2">
        <Form.Label sm="3" md='5' column >
          Gender
        </Form.Label>
        <Col sm="9" md='7' >
        <Form.Check
            inline
            label="Male"
            name="gender"
            type='radio'
            id='male'
            onChange={(e)=>{setFormData({...formdata,[e.target.id]:e.target.value})}}
          />
          <Form.Check
            inline
            label="Female"
            name="gender"
            type='radio'
            id='female'
            onChange={(e)=>{setFormData({...formdata,[e.target.name]:e.target.id})}}
          />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3" controlId="submit">
        <Col sm="12" md='12' >
          <Form.Control type="submit" className='btn btn-outline-info'/>
        </Col>
      </Form.Group>
      
    </Form> <br/>
    
    
    </div>
    )
}

export default Registeruser
