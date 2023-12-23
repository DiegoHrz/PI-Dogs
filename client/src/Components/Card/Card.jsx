import React from 'react'

const Card = ({info}) => {
  return (
    <div>
      <div>
        <h2>{info.name}</h2>
      </div>
      <div>
        <p>{info.reference_image_id}</p>
        <p>{info.weight}</p>
        <h4>{info.temperaments}</h4>
      </div>
    </div>
  )
}

export default Card