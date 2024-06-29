import React from 'react'
import Details from './Details'
import Filters from './Filters'

const Card = ({ dataItem }) => {

  return (
    <div className={`bg-white mb-20 md:mb-5 p-6 md:px-10 shadow-lg rounded-md  ${dataItem.featured ? 'border-l-4  border-l-primary-desaturatedDarkCyan' : ''}`}>

      {/* content container  */}
      <div className='translate-y-[-23%] md:translate-y-0 md:items-center flex flex-col md:flex-row gap-4 md:gap-7 md:justify-between'>

        {/* Left/upper part of card  */}
        <div className="card-left md:flex gap-7 items-center">
          <div className="logo flex-grow min-w-20">
            <img src={`/${dataItem.logo}`} alt="logo" className='h-20 mb-3 md:mb-0'/>
          </div>
          <Details data={dataItem} />
        </div>

        {/* separating line  */}
        <div className='bg-primary-darkGrayishCyan h-[1px] w-full  md:hidden'></div>

        {/* Right/lower part of card  */}
        <div className="card-right">
          <Filters data={dataItem} />
        </div>
      </div>
    </div>
  )
}

export default Card