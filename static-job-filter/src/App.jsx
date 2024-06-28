import React from 'react'
import Background from './components/Background'
import Body from './components/Body'
import CardList from './components/CardList'

const App = () => {
  return (
    <div className=''>
      <Background />
      <Body>
        <CardList/>
      </Body>
    </div>
  )
}

export default App