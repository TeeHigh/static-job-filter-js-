import React from 'react'
import Details from './Details'

const Card = ({dataItem}) => {
  

  return (
    <div className='bg-white mb-2 p-6 md:p-12'>
      <div className="card-left">
        <div className="logo">
          <img src={`/${dataItem.logo}`} alt="logo" />
        </div>
        <Details data={dataItem} />
      </div>
      <div className="card-right">
        <div className="filters"></div>
      </div>
    </div>
  )
}

export default Card