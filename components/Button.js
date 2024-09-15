import React from 'react'

export default function Button({image,onClick}) {
  return (
    <button onClick={onClick} >
        <img src={image} alt="" />
    </button>
  )
}
