import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

const Cards = () => {

  const dogs = useSelector(state => state.dogs)

  return (
    <div>
      {dogs.map(dog=><Card info={dog}/>)}

    </div>
  )
}

export default Cards