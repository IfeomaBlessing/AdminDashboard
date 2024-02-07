import {useEffect, useState} from 'react'
import './layout.css'
import {Routes ,Route} from "react-router-dom"
import Home from '../pages/dashboard/Home'
import Employees from '../pages/employees/Employees'
import Notify from '../pages/notify/Notify'
import Navbar from '../components/nav/Navbar';
import Sidebar from '../components/sidebar/Sidebar'



const Layout = () => {
 const [openSidebar, setOpenSidebar] =useState(false)
 const [unreadMessages, setUnreadMessages] = useState(() => {
  // Retrieve the count from local storage or default to 0
  return parseInt(localStorage.getItem('unreadMessages')) || 0;
});

 const toggleSidebar=()=>{
  setOpenSidebar(!openSidebar)
 }

 const closeSidebarOnMobile = () => {
  // Check if the device width is less than 850px 
  if (window.innerWidth < 850) {
    toggleSidebar();
  }
};

useEffect(()=>{
      localStorage.setItem("unreadMessages",(unreadMessages).toString())
},[unreadMessages])

  return (
    <div className='container'>
      
    <Sidebar  openSidebar={openSidebar} 
    closeSidebarOnMobile ={closeSidebarOnMobile}/>

<div className = {openSidebar ? "mini-container active" : "mini-container"}>
   <Navbar openSidebar={openSidebar} toggleSidebar={toggleSidebar} 
    unreadMessages={unreadMessages}/>

    <div className="layout-content">
    <Routes>
    
    <Route path='/'  element ={<Home />}/>
    <Route path='/Employees' element ={<Employees />}/>
    <Route path='/Message' element ={<Notify  setUnreadMessages={setUnreadMessages} />}/>
    </Routes>

    </div>

</div>
</div>
  );
}

export default Layout;
