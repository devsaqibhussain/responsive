import React from 'react'
import { useState } from 'react'
import { HomePageCard } from './'
import { callAPI } from './utils/callAPI'

const HomePage = () => {
  const [planet, setPlanet] = useState({
    "name": "Moon",
    "index": "1",
    "title": "Earth's Moon",
    "description":"The fifth largest moon in the solar system, Earth's moon is the only place beyond Earth where humans have set foot."
})
  const [data, setData] = useState([])
  callAPI("data/planets.json").then((data) => setData(data) )
  const planetSelector = (e) => {
    setPlanet(e)
  }
  return (
    <div className=' h-full text-white/75'>
      <ul className=' flex gap-2 md:gap-4 m-auto items-center justify-center'>
        {data.map((planet,index)=>{
          return (
          <li 
          key={index}
          className='bg-cyan-700/25 px-4 rounded-full font-semibold md:font-bold text-sm md:text-base cursor-pointer hover:bg-cyan-600/25 hover:text-cyan-300'
          onClick={ () => {planetSelector({...planet})}}
          >
            {planet.name}
          </li>
          )
        })}
      </ul>
      <HomePageCard planet={planet}/>
    </div>
  )
}

export default HomePage