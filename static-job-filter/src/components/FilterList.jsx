import React from 'react'
import { useCards } from '../contexts/CardContext'
import FilterButtons from './FilterButtons';

function FilterList() {
  const { filterList, clearFilterList } = useCards();

  return (
    <div className="bg-white mb-20 md:mb-5 px-6 py-4 md:px-10 shadow-lg rounded-md flex justify-between translate-y-[-40px]">
      {/* ----filter items------ */}
      <div className='flex gap-3 flex-wrap'>
        {
          filterList.map((item) => (
            <FilterButtons key={item} item={item}/>
          ))
        }
      </div>

      {/* -----clear button------ */}
      <button className='text-primary-darkGrayishCyan font-bold text-right hover:text-primary-desaturatedDarkCyan hover:underline' onClick={clearFilterList}>Clear</button>
    </div>
  )
}

export default FilterList