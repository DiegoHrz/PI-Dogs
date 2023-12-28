import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

const Card = ({info}) => {
  return (
    
    <div className='card-container'>
      {console.log(info)}
      <div className='card-title-container'>
        <Link to={`/details/${info.id}`} ><h2>{info.name}</h2></Link>
        
      </div>
      <div className='card-info-container'>
        <img src={info.image} alt={info.name} height="100px"/>
        <h2>Weight: {info.weight}{(info.min_weight && info.max_weight) && (<span>{info.min_weight} - {info.max_weight}</span>)}  </h2>

        <p>Temperaments: {info.temperament}</p>
        {/* <p>Temperaments: {info.temperaments.join(', ')}</p> */}
      </div>
    </div>
  )
}

export default Card