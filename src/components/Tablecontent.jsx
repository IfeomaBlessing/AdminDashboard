import React from 'react'
import profile from "../assets/avatar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'


const Tablecontent = ({employeeList, editEmployee,deleteEmployee,modal}) => {

  const disableEdit = (id) => {
    // only allow editing if the modal is not open
    if (!modal) {
      editEmployee(id);
    }
  };

  const disableDelete = (id) => {
     // only allow delete if modal is not open
    if (!modal) {
      deleteEmployee(id);
    }
  };


  return (
    <>
  {employeeList.map((x,id)=>{
               return (
  <tbody key={x.id} >
  <tr >
  <td className=" flex person-details">
  {x.pix  ? (
  <img src={x.pix} alt="profileImage" className="profile" loading="lazy"/>
) : (
  <img src={profile} alt="default image"loading="lazy" />
)}
               <h5>{x.inputName}</h5>
               </td>
               
               <td> <h5>{x.inputEmail}</h5></td>
               <td> <h5>{x.inputDept}</h5></td>

               <td> <h5 style={{ color: x.inputStatus === 'Active' ?'green' : 'red'}}>
                {x.inputStatus}</h5></td>

               <td>
             
               <div className="btn">
               <FontAwesomeIcon icon={faEdit} style={{color:"green", marginRight:"5px"}} onClick={()=>disableEdit(x.id)} />
                <FontAwesomeIcon icon={faTrash} style={{color:"red"}} onClick={()=>disableDelete(x.id)}/>
               </div>
               </td>
               </tr>
           </tbody>
               )
})
}

</>   
)
}

export default Tablecontent;
