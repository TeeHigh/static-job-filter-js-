import React from 'react'
import Background from './components/Background'
import Body from './components/Body'
import CardList from './components/CardList'
import FilterList from './components/FilterList'
import { useCards } from './contexts/CardContext'

const App = () => {
  const {filterList} = useCards();

  return (
    <div className=''>
      <Background />
      <Body>
        {filterList.length > 0 && <FilterList/>}
        <CardList/>
      </Body>
    </div>
  )
}

export default App