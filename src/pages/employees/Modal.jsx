import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState}from 'react';
import profile from "../../assets/avatar.png"
import axios  from 'axios';

const Modal = ({addEmployee, closeModal,edit,setEmployeeList,employeeList}) => {

  const employeeToEdit = edit !== null ? employeeList.find(emp => emp.id === edit) : null;

// input field states

 const [inputStatus, setInputStatus] = useState(employeeToEdit ? employeeToEdit.inputStatus : "");
const [inputName, setInputName] = useState(employeeToEdit ? employeeToEdit.inputName : "");
const [inputEmail, setInputEmail] = useState(employeeToEdit ? employeeToEdit.inputEmail : "");
const [inputDept, setInputDept] = useState(employeeToEdit ? employeeToEdit.inputDept : "");
const [pix, setPix] = useState(employeeToEdit ? employeeToEdit.pix : null);
 
  // to convert blob to base64 string
 const handleImage =(e)=>{
  const readFile = new FileReader()
  readFile.onload =()=>{
    setPix(readFile.result)
  }
  readFile.readAsDataURL(e.target.files[0])
}
const [error, setError] =useState("")

const validateData=()=>{
  // if all these states exist
  if (inputStatus && inputName && inputEmail && inputDept){
    setError("")
    return true;
  }
else{
       let errorMsg =[]
       for (const [key, value] of Object.entries({inputStatus,inputName,inputEmail,inputDept})){
        if(!value){
          errorMsg.push(key)
        }
       }
       setError(errorMsg.join(','))
       return false;
}
}

 const handleSubmit = async (e)=>{
   const newEmployee = {
    pix,
    inputName,
    inputEmail,
    inputDept,
    inputStatus
  };
  e.preventDefault();

  if (!validateData()) return;

const API_URL = import.meta.env.VITE_API_URL;
 
  // if it is not an edit, enter new data
  if (edit === null){
   
   const response = await axios.post (`${API_URL}/employees`,newEmployee)
      addEmployee(response.data);
  }
  
  //if it is an edit, update the editted data
  else{
const response = await axios.put(`${API_URL}/employees/${edit}`, newEmployee);


    setEmployeeList((prevList) => prevList.map((currentEmployee) =>
     currentEmployee.id === edit ? response.data : currentEmployee
    )
  );
  }


  // RESET FORM FIELDS
  setInputName("");
  setInputDept("");
  setInputEmail("");
  setInputStatus("");
  setPix( null );
  closeModal();

  
 }


  return (
    
    <div className="modal-container open">
     <div className="modal-body">

      <div className="modal-btn">
     <FontAwesomeIcon icon={faTimes} className ="boxIcon" onClick={closeModal}/>
     </div>

 <form onSubmit={handleSubmit}>

 <main className=' grid modal-content'>

 <div className="img flex">
 <label htmlFor="upload">
 {pix  ? (<img src={pix} alt="uploaded images" />) :
  ( <img src={profile} alt="default image" /> )}
  </label>

 <input type="file" id="upload" style={{display:"none"}}
  onChange={handleImage} loading="lazy"/>
  </div>
       
  <div className="main-input">
  <input type="text" placeholder='Enter Name' value={inputName}   onChange={(e)=>setInputName(e.target.value)} />
  

  <select  value={inputDept} onChange={(e)=>setInputDept(e.target.value)} >
        <option value="" disabled>Department</option>
        <option value="HR">HR</option>
        <option value="IT">IT</option>
        <option value="Sales">Sales</option>
        <option value="Operations">Operations</option>
   </select>
   
      
        <select   value={inputStatus}  onChange={(e)=>setInputStatus(e.target.value)}>
        <option value="" disabled>Status</option>
        <option value="Active">Active</option>
        <option value="Not-active">Not-active</option>
        </select>
        


        <input type="email" placeholder='Enter email' value={inputEmail}   onChange={(e)=>setInputEmail(e.target.value)}/>
      </div>
     

      </main>
      {error && <div className='error'>{`Enter ${error}`}</div>}
      <button type='submit'style={{'--bgcolor':'white'}}className='btn2'>Enter Profile</button>
      </form>
 


    
  
    </div>
     </div>
        
  );
}

export default Modal;
