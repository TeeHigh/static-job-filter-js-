import React from 'react'
import { useCards } from '../contexts/CardContext'
import Card from './Card';

const CardList = () => {
  const {filterList, data} = useCards();

  return (
    <div className={`${filterList.length > 0 ? 'mt-0' :'mt-20' }`}>
      {
        data && data.map((item) =>(
          <Card key={item.id} dataItem={item} />
        ))
      }
    </div>
  )
}

export default CardList