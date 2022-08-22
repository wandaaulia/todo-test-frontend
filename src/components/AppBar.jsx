import React from 'react'

const AppBar = () => {
  return (
    <div className=' mx-auto header pb-12 pt-8' data-cy='header-background' style={{ backgroundColor: '#16ABF8' }}>
      <h1 data-cy='header-title' className='w-[1000px] max-w-[1000px]  text-2xl font-bold text-white text-left w-[80%] mx-auto'> TO DO LIST APP </h1>
    </div>
  )
}

export default AppBar
