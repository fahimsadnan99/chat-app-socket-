import React from 'react'
import {useDispatch,useSelector} from "react-redux"

const Home = () => {
  const state = useSelector(state=> state)
  console.log(state);
  return (
    <div>Home</div>
  )
}

export default Home