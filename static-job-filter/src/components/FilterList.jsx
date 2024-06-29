import React from 'react'
import { useCards } from '../contexts/CardContext'

function FilterList() {
  const {filterList, clearFilterList} = useCards();

  return (
    <div className="bg-white mb-20 md:mb-5 px-6 py-4 md:px-10 shadow-lg rounded-md flex justify-between translate-y-[-40px]">
      {/* ----filter items------ */}
      {
        filterList.map((item) => <p key={item}>{item}</p>)
      }

      {/* -----clear button------ */}
      <button className='text-primary-darkGrayishCyan font-bold text-right hover:text-primary-desaturatedDarkCyan hover:underline' onClick={clearFilterList}>Clear</button>
    </div>
  )
}

export default FilterList