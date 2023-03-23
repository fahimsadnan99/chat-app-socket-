import React, { useState } from 'react'
import "../style/Navbar.css"
import {Link} from "react-router-dom"




const navbarMenu = ["Home","Signin","Singup"]

const Navbar = () => {
   const [selectMenu,setSelectMenu] = useState(null)

console.log(selectMenu);
  return (
    <div className='navbarWrapper'>

    <div className='navbarChild'>
     <p>ChatApp</p>




     <ul className='navbarUl'>
      {
         navbarMenu?.map((item,index)=>{
          return (<Link key={index} to={index == 0? "/" : item}><li onClick={()=> setSelectMenu(index)} className={`navbarLi ${selectMenu === index ? "text-white/70" : "text-white"}`}>{item}</li></Link>)
         })
      }
     </ul>
    </div>

    </div>
  )
}

export default Navbar