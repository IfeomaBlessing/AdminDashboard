import {  faMoneyBillWave, faPeopleGroup, faPersonBiking } from '@fortawesome/free-solid-svg-icons'
import Box from '../../components/Box'
import Chart from '../../components/Chart'
import "./home.css"

const Home = () => {
  return (
    <main className='container'>

     <h2 className='header'>Dashboard</h2>
      
    <section className="home-content">
        <div className="boxes">
        <Box
        title ="Employees"
        user ="12"
        detail ="See All Employees"
        percent = "+2% " 
        boxIcon = {faPeopleGroup} colorClass="red"
        linkName = "/Employees"/>
        
        <Box
        title ="Delieveries"
        user ="300"
        detail ="View All Deliveries"
        percent = "-10% "
        boxIcon ={faPersonBiking} colorClass="blue" />

<Box
        title ="Earnings"
        user ="$5.85k"
        detail ="View All Earnings"
        percent = "+3% " 
        boxIcon = {faMoneyBillWave} colorClass="green"/>
        </div>

        <div className="charts">
          <Chart/>
        </div>
        </section>

        </main>
      
    
    
  )
}

export default Home;
