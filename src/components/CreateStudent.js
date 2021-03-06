import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';

function CreateStudent(props) {
  let[name,setName]=useState("");
  let[email,setEmail]=useState("");
  let[mobile,setMobile]=useState("");
  let[batch,setbatch]=useState("");

  let navigate=useNavigate();

  let handleSubmit=()=>{
    let data={
    name,
    email,
    mobile,
    batch
  }

  let students=[...props.data.students]
  students.push(data)
  props.data.setStudents(students)
  navigate ('/student-list')
}
  return <>
<div className='container'>
      <div className='row '>
        <div className='col-lg-8'>
    <Form>
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" onChange={(e=>setName(e.target.value))}/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email" placeholder="Enter Email" onChange={(e=>setEmail(e.target.value))}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text" placeholder="Enter Mobile Number"onChange={(e=>setMobile(e.target.value))} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Batch</Form.Label>
    <Form.Control type="text" placeholder="Batch" onChange={(e=>setbatch(e.target.value))}/>
  </Form.Group>
 
  <Button variant="primary" onClick={() =>handleSubmit()}>
    Submit
  </Button>
  </Form>
  </div>
 </div>
</div>
    
    </>
}
export default CreateStudent
