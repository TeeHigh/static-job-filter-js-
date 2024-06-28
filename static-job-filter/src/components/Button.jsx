import React from 'react'

function Button({filter}) {
  return (
    <div className='bg-primary-cyanFilter text-primary-desaturatedDarkCyan p-1 rounded-md cursor-pointer font-bold'>{filter}</div>
  )
}

export default Button