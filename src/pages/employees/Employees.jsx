
import './employees.css'
import Modal from './Modal'
import {useEffect, useState}from 'react';
import Tablecontent from '../../components/Tablecontent';
import axios from 'axios';


const Employees = () => {
  const [modal, setModal] =useState(false)
  const [edit, setEdit] =useState(null)
   const  [employeeList, setEmployeeList] =useState([])

  const API_URL = process.env.REACT_APP_API_URL;

   useEffect(()=>{
     const fetchEmployees = async ()=>{
        
     try{
       const response = await axios.get(`${API_URL}/employees`)
        // console.log(response)
          setEmployeeList(response.data);
     }
     catch (error){
       console.error('error fetching Employees', error)
     }
     }
     fetchEmployees();
   },[])

  

//  TO ADD NEW LIST 
const addEmployee = async (newData) => {
  
  try {
       const response = await axios.post (`${API_URL}/employees`,newData)
    

    // Update state with the new record returned from backend
    setEmployeeList(prev => [...prev, response.data])
  } catch (error) {
    console.error("Error adding employee:", error)
  }
}



  const deleteEmployee = async(id) =>{

    try {
          
    await axios.delete(`${API_URL}/employees/${id}`);
      setEmployeeList (prev=>prev.filter(emp =>emp.id !== id));
    } catch (error) {
      console.error('delete employee data:', error)
    }
  }

  const editEmployee =(employeeId)=>{
         setEdit(employeeId)
         setModal(true)
  }



  return (

    <section className='employeepage container'>

       <div className={`table-header flex ${modal ? "blurred":""}`}>
       <h2>List Of Employees</h2>
       <button onClick={()=>setModal(true)} style={{'--bgcolor':'#d32d41'}} className='btn1'>
        Add New</button>
       </div>
       
       <div className={`table-wrapper ${modal ? "blurred":""}`}>
        <table style={{width : '100%'}}>
          <thead>
           <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Status</th>
            <th>Action</th>
           </tr>
           </thead>

           <Tablecontent employeeList={employeeList} editEmployee ={editEmployee}
           deleteEmployee ={deleteEmployee} modal={modal}/>
            
        </table>
        </div>
        {modal && <Modal closeModal={()=>{setModal(false); setEdit(null)}} 
        addEmployee ={addEmployee} edit={edit}
        employeeList={employeeList} setEmployeeList={setEmployeeList}/>}
    </section>
  
  )
}

export default Employees;
