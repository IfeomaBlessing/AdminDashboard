import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import '../components/box.css'


const Box = ({title,user,linkName,percent,boxIcon,detail,colorClass}) => {
  return (
      
       <div className= "box">
           <div className="left">
                 <h3>{title}</h3>
             <span style={{fontSize:"1rem"}}>{user}</span>
             <Link to={linkName} className='Boxdetail'><p>{detail}</p></Link>
           </div>
           
           <div className="right">
            <h5>{percent}</h5>
            <FontAwesomeIcon icon={boxIcon} className ={`boxIcon ${colorClass}`}/>
           </div>
       </div>

     
       
  )
}

export default Box
