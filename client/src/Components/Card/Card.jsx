import React from 'react'
import "./Card.css"

const Card = ({info}) => {
  return (
    <div className='card-container'>
      <div className='card-title-container'>
        L
        <h2>{info.name}</h2>
      </div>
      <div className='card-info-container'>
        <img src={info.image} alt={info.name} height="100px"/>
        <h2>{info.weight}</h2>
        <p>{info.temperament}</p>
      </div>
    </div>
  )
}

export default Card