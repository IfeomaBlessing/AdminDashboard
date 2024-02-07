
  import {  faEnvelope, faDashboard, faPerson } from '@fortawesome/free-solid-svg-icons'


export const Sidelinks =[
    {
        Name: "Dashboard",
         to :"/",
         icon :faDashboard
    },

    {
        Name: "Employees",
         to :"/Employees",
         icon : faPerson
    },

    {
        Name: "Messages",
         to :"/Message",
         icon : faEnvelope,
    },
]