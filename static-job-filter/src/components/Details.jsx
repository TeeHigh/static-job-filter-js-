import React from 'react'

function Details({ data }) {
  return (
    <div className="details flex flex-col gap-2">
      <div className="flex gap-2">
        <p className="company mr-3 text-primary-desaturatedDarkCyan font-bold">{data.company}</p>
        {
          data.new && 
          <p className="bg-primary-desaturatedDarkCyan py-1 px-2 font-bold text-white text-[.7em] md:text-[.85em] rounded-full ">NEW!</p>
        }
        {
          data.featured && 
          <p className="featured uppercase bg-primary-veryDarkGrayishCyan py-1 px-2 font-bold text-white text-[.7em] md:text-[.85em] rounded-full">Featured</p>
        }
      </div>
      <div className="row2 font-bold">{data.position}</div>
      <div className="row3 text-primary-darkGrayishCyan">{`${data.postedAt} • ${data.contract} • ${data.location}`}</div>
    </div>
  )
}

export default Details