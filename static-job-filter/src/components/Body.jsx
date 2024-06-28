import React from 'react'


const Body = ({children}) => {
  return (
    <div className='max-w-[90%] w-[70rem] md:max-w-[80%]  h-full mx-auto absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-35%] '>
      {children}
    </div>
  )
}

export default Body