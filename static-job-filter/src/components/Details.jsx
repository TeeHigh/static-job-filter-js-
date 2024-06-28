import React from 'react'

function Details({ data }) {
  return (
    <div className="details">
      <div className="row1">
        <p className="company">{data.company}</p>
        {
          data.new && 
          <p className="new">NEW!</p>
        }
        {
          data.featured && 
          <p className="featured uppercase">Featured</p>
        }
      </div>
      <div className="row2">{data.position}</div>
      <div className="row3 ">{`${data.postedAt} • ${data.contract} • ${data.location}`}</div>
    </div>
  )
}

export default Details