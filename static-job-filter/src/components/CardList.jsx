import React from 'react'
import { useCards } from '../contexts/CardContext'
import Card from './Card';

// role, level, languages[], tools[] 

const CardList = () => {
  const {filterList, data} = useCards();

  return (
    <div className={`${filterList.length > 0 ? 'mt-0' :'mt-20' }`}>
      {
        data && data.map((item) =>{
          const itemSpecs = [item.role, item.level, ...item.languages, ...item.tools];

          if (filterList.every(spec => itemSpecs.includes(spec))) return <Card key={item.id} dataItem={item} />
        })

      }
    </div>
  )
}

export default CardList