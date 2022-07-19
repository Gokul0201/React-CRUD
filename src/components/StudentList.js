import React from 'react'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/esm/Table';
import Button from 'react-bootstrap/esm/Button';

function StudentList(props) {
    let navigate=useNavigate();
    
    let handleDelete=(i)=>{
        let students = [...props.data.students];
        students.splice(i,1);
        props.data.setStudents(students)
    }
  return (
    <div className='container'>
        <h1 className='d-flex justify-content-center fw-bold text-dark'>STUDENTS LIST</h1>
        <Button variant="primary" onClick={() => navigate('/create-student')}> + Create Student</Button>
        <div className='row py-5'>
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Batch</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
          props.data.students.map((e,i)=>{
              return <tr key={i}>
                  <td>{i+1}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.mobile}</td>
                  <td>{e.batch}</td>
                  <td>
                      <Button variant="primary" onClick={() => navigate(`/edit-student/${i}`)}>Edit</Button>
                      &nbsp;&nbsp;
                      <Button variant="danger" onClick={() => handleDelete(i) }>Delete</Button>
                  </td>
              </tr>
          })
      }
    </tbody>
  </Table> 
  </div>                                        
</div>
  )
}

export default StudentList