import React from 'react'
import Cards from '../../Components/Cards/Cards'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDogs, page } from '../../Redux/Action/action'
import { Link } from 'react-router-dom/cjs/react-router-dom'


const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDogs())
    

  }, [])
  
  const paginado = (event) =>{
    dispatch(page(event.target.name))
    console.log(event.target.name)
  }

  return (
    <div>
      <h1>Home</h1>
      <div>
        <label htmlFor="">Paginado</label>
        <button name='prev' onClick={paginado}>Prev</button>
        <button name='next' onClick={paginado}>Next</button>
      </div>
      <div>
        Create your doggie: <Link to={'/create'}><button>Crealo</button></Link>
      </div>
      <Cards/>
    </div>
  )
}

export default Home