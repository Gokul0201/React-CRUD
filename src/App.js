import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';
import StudentList from './components/StudentList';


function App() {
  let data = {
    monthly:"Rs. 50,000",
    annual:"Rs. 5,80,000",
    task:50,
    pending:18
  }

  let [students,setStudents] =useState([
    {
      name:"ranjith",
      email:"ranjitj@gmail.com",
      mobile:"123456789",
      batch:"B36WDT",
    },
    {
      name:"praveen",
      email:"praveen@gmail.com",
      mobile:"1234566789",
      batch:"B35WE",
    },
    {
      name:"Gokul",
      email:"gokul@gmail.com",
      mobile:"12345587526",
      batch:"B36WE",
    }
  ])
  return <>
  <div className='main-wrapper'>
  
      <BrowserRouter>
     
      <Sidebar/>
      
          <Routes>
              <Route path='dashboard' element={<Dashboard data={{data,students,setStudents}}/>}/>
              <Route path='create-student' element={<CreateStudent data={{students,setStudents}}/>}/>
              <Route path='student-list' element={<StudentList data={{students,setStudents}}/>}/>
              <Route path='edit-student/:id' element={<EditStudent data={{students,setStudents}}/>}/>
              <Route path='*' element={<Dashboard data={{data,students,setStudents}}/>}/>
          </Routes>
      </BrowserRouter>
  </div>
  </>
}
export default App;
