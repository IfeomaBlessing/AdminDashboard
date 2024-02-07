
import {Sidelinks} from '../sidebar/Sidelinks' 
import {Link} from 'react-router-dom'
import "./sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';



const Sidebar = ({openSidebar,closeSidebarOnMobile}) => {
  
  return (
    <div className={openSidebar ? "sidebar active" : "sidebar"}>

      <div className='logo flex'>
        <h4>ADMIN</h4>
      </div>
      
       <ul onClick={()=>{ closeSidebarOnMobile()}}>
        {Sidelinks.map((x,index)=>(

         <Link key={index} to={x.to}>
          <li>
          <FontAwesomeIcon icon={x.icon} className ="icons" />
          <span> {x.Name} </span>
          </li>
          </Link>
            
            
        ))}
        <div className="logout">
          <li>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className ="icons" />
          <span>Logout</span>
          </li>
        </div>
       </ul>
    
    </div>
  )
}

export default Sidebar;