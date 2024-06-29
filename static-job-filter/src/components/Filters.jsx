import React from 'react'
import Button from './Button'

function Filters({data}) {
  const {role, level, languages, tools} = data;

  const cardFilters = [role, level, ...languages, ...tools];

  return (
    <div className="filters flex gap-2 flex-wrap">
      {
        cardFilters.map(
          (filter) => <Button key={filter} filter={filter} />
        )
      }
    </div>
  )
}

export default Filters