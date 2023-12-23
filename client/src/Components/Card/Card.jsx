import React from 'react'

const Card = ({info}) => {
  return (
    <div>
      <div>
        <h2>{info.name}</h2>
      </div>
      <div>
        <p>{info.reference_image_id}</p>
        <h2>{info.weight}</h2>
        <p>{info.temperament}</p>
      </div>
    </div>
  )
}

export default Card