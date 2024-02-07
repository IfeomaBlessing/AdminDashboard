
import "./navbar.css"
import name from "../../assets/mypix.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const Navbar = ({openSidebar, toggleSidebar,unreadMessages}) => {
 

  return (
    <div className={openSidebar ? "Navbar active" : "Navbar"}>
      <div className="nav-wrapper flex">


      <div className="input-wrapper flex">
        
      <div className="menu" onClick={()=>toggleSidebar()}>
        <FontAwesomeIcon icon={faBars}/>
      </div>

      <div className="search-wrapper flex">
        <input type="text" placeholder='Search...' />
        <FontAwesomeIcon icon={faSearch} className="searchBtn" />
      </div>

      </div>

      <div className="nav-icons flex">

  <Link to="/Message">
  <div  className ='nav-icon'>
  <FontAwesomeIcon icon={faEnvelope}/>
  <span className="messageLength flex">{ unreadMessages}</span>
  </div> 
  </Link>

  <div className ='author flex'>
    <img src={name} alt="profile_img" loading="lazy" />
    
    <div className="name-profile">
      <p style={{fontSize :'0.7rem'}}>Ifeoma Obodozie</p>
      <p style={{fontSize :'0.7rem'}}>Frontend Developer</p>
    </div>
      </div>
      </div>
      
      </div>
    </div>
  )
}

export default Navbar
