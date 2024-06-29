import React from 'react'
import { useCards } from '../contexts/CardContext'

function Button({filter}) {
  const {addFilter} = useCards();

  return (
    <div className='bg-primary-cyanFilter text-primary-desaturatedDarkCyan p-1 rounded-md cursor-pointer font-bold hover:bg-primary-desaturatedDarkCyan hover:text-white' onClick={()=> addFilter(filter)}>
      {filter}
    </div>
  )
}

export default Button