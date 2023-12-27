import React from 'react'
import Cards from '../../Components/Cards/Cards'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDogs } from '../../Redux/Action/action'
import { Link } from 'react-router-dom/cjs/react-router-dom'


const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDogs())
    

  }, [])
  

  return (
    <div>
      <h1>Home</h1>
      <div>
        Create your doggie: <Link to={'/create'}><button>Crealo</button></Link>
      </div>
      <Cards/>
    </div>
  )
}

export default Home