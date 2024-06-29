import React from 'react'

function Details({ data }) {
  return (
    <div className="details flex flex-col gap-2 cursor-default">
      <div className="flex gap-2">
        <p className="company mr-3 text-primary-desaturatedDarkCyan font-bold">{data.company}</p>
        {
          data.new && 
          <p className="new bg-primary-desaturatedDarkCyan py-1 px-2 font-bold text-white text-[.7em] md:text-[.85em] rounded-full ">NEW!</p>
        }
        {
          data.featured && 
          <p className="featured uppercase bg-primary-veryDarkGrayishCyan py-1 px-2 font-bold text-white text-[.7em] md:text-[.85em] rounded-full">Featured</p>
        }
      </div>
      <div className="row2 font-bold ">
        <p className='hover:text-primary-desaturatedDarkCyan w-max '>{data.position}</p>
      </div>
      <div className="row3 text-primary-darkGrayishCyan">
        <span>{data.postedAt}</span> &nbsp; • &nbsp;<span>{data.contract}</span> &nbsp; • &nbsp; <span>{data.location}</span>
      </div>
    </div>
  )
}

export default Details