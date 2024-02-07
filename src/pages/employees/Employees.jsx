
import './employees.css'
import Modal from './Modal'
import {useEffect, useState}from 'react';
import Tablecontent from '../../components/Tablecontent';


const Employees = () => {
  const [modal, setModal] =useState(false)
  const [edit, setEdit] =useState(null)

  //GET VALUES OF LOCAL STORAGE
const savedList = JSON.parse(localStorage.getItem("employeeList")) || []


// employeeList array of object
 const  [employeeList, setEmployeeList] =useState(() => {
  const listFromLocalStorage = savedList;
  if (listFromLocalStorage.length > 0) {
    return listFromLocalStorage;
  } else {
    // Append default objects to the list
    return [
      {pix:"",inputName: "Chi", inputEmail: "ify@gmail.com", inputDept: "sales", inputStatus: 'Active' },
      {pix:"",inputName: "Oyin", inputEmail: "oyeine@gmail.com", inputDept: "sales", inputStatus: 'Active' },
      {pix:"",inputName: "Steve", inputEmail: "steve@gmail.com", inputDept: "sales", inputStatus: 'Active' },
    ];
  }
});

//  TO ADD NEW LIST 
 const addEmployee =(data)=>{
  setEmployeeList([
    ...employeeList,{...data, key: Date.now()} ])
   
  }

  // TO DELETE DATA
  const deleteEmployee =(targetValue)=>{
    const updatedEmployee = employeeList.filter((_, id)=> id!== targetValue )
    setEmployeeList(updatedEmployee)
  }

  const editEmployee =(id)=>{
         setEdit(id)
         setModal(true)
  }

  // SAVE DATA TO LOCAL STORAGE
  useEffect(()=>{
    localStorage.setItem("employeeList",JSON.stringify(employeeList))
},[employeeList]);

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
