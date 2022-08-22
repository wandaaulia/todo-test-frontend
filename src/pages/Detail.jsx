import React from 'react'
import AppBar from '../components/AppBar'
import TodoHome from '../components/TodoHome'
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    
    return (
    <div style={{ backgroundColor: 'rgb(244,244,244)' }} className='h-screen'>
      <AppBar/>
      <TodoHome id={id}/>
    </div>
  )
}

export default Detail
