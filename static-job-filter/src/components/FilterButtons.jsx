import React from 'react'
import { useCards } from '../contexts/CardContext'

function FilterButtons({item}) {
  const {removeFilter} = useCards();
  console.log(item)

  function handleDelete(e){
    e.preventDefault();
    removeFilter(item)
  }

  return (
    <div className='flex items-center rounded-md bg-primary-cyanBackground gap-1'>

      <p key={item} className='px-3 text-primary-desaturatedDarkCyan font-bold'>{item}</p>

      <button className='cursor-pointer font-extrabold text-2xl bg-primary-desaturatedDarkCyan text-white px-2 rounded-r-md' onClick={handleDelete}>×</button>

    </div>
  )
}

export default FilterButtons