import React from 'react'
import Cards from '../../Components/Cards/Cards'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDogs } from '../../Redux/Action/action'


const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDogs())
    

  }, [])
  

  return (
    <div>
      <h1>Home</h1>
      <Cards/>
    </div>
  )
}

export default Home