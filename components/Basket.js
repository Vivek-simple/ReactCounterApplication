import React from 'react'

export default function Basket({count,name}) {
  return (
    <div>
        <h1><span>{count} </span>apples</h1>
        <p>{name}</p>
    </div>
  )
}
