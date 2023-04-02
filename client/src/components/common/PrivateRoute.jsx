import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {ErrorMsg} from "../../Util/AllMessage"
import {isAuthenticate} from "../../Util/TokenAuth"

const PrivateRoute = ({children}) => {
    
    const navigate = useNavigate()
    useEffect(()=>{
           if(!isAuthenticate()){
           ErrorMsg("Please Login First ")
            navigate("/signin")
           }
    },[])
  return (
    <div>{children}</div>
  )
}

export default PrivateRoute