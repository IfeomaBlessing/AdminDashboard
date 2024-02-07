import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState}from 'react';
import profile from "../../assets/avatar.png"

const Modal = ({addEmployee, closeModal,edit,setEmployeeList,employeeList}) => {

// input field states
 const [inputStatus, setInputStatus] = useState(edit !== null ? employeeList[edit].inputStatus:"");
 const [inputName, setInputName] = useState(edit !== null ? employeeList[edit].inputName:"");
 const [inputEmail, setInputEmail] = useState(edit !== null ? employeeList[edit].inputEmail:"");
 const [inputDept, setInputDept] = useState(edit !== null ? employeeList[edit].inputDept:"");
 const [pix, setPix] = useState(edit !== null ? employeeList[edit].pix:null);
 
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

 const handleSubmit =(e)=>{
  e.preventDefault();
  if (!validateData()) return;
 
  // if it is not an edit, enter new data
  if (edit === null){addEmployee({inputStatus,inputName,inputEmail,inputDept,pix})}
  
  //if it is an edit, update the editted data
  else{
    setEmployeeList((prevList)=>prevList.map((currentEmployee, id)=> id ===edit ?
   {...currentEmployee,inputStatus, inputName,inputEmail,inputDept,pix} : currentEmployee
    ))
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
