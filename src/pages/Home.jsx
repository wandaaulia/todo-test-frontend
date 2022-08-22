import React from 'react'
import ActivityHome from '../components/ActivityHome'
import AppBar from '../components/AppBar'

const Home = () => {
  return (
    <div style={{ backgroundColor: 'rgb(244,244,244)' }}>
      <AppBar />
      <ActivityHome />
    </div>
  )
}

export default Home
