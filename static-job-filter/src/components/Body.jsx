import React from 'react'


const Body = ({children}) => {
  return (
    <div className='max-w-[90%] w-[70rem] md:max-w-[80%] mx-auto flex flex-col'>
      {children}
    </div>
  )
}

export default Body