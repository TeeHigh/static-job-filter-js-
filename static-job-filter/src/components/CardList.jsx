import React from 'react'
import { useCards } from '../contexts/CardContext'
import Card from './Card';

const CardList = () => {
  const {filterList, data} = useCards();

  return (
    <div>
      {
        data && data.map((item) =>(
          <Card dataItem={item} />
        ))
      }
    </div>
  )
}

export default CardList