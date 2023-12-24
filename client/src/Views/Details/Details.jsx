import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {

  //retornarme dentro de params el id que yo le paso en la ruta  
  const params = useParams
  console.log(params)

  return (
    <div>Details</div>
  )
}

export default Details