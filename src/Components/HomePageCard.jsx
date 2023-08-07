import React from 'react'
import { Base_URL } from './utils/Constants'

const HomePageCard = ({planet}) => {

  return (
    <div>
        <div className=' ml-4 my-4 font-Handjet text-5xl font-bold'>
         0{planet.index}-{planet.name}
        </div>
        <div className=' md:flex items-center justify-evenly'>
            <img className=' animate-planet-spin md:w-[50%] m-auto' src={`${Base_URL}/images/planet_${planet.index}.png`}/>
            <div className='md:w-[50%]'>
                <div className=' bg-gray-900/75 w-[80%] md:min-w-[400px] h-[240px] m-auto'>
                    <div className='relative'>
                        <div className=' absolute text-sm md:text-base xl:text-lg  bg-cyan-900/50 h-[20px] left-2 top-2 rounded-tr-full font-Handjet pl-2 md:pl-4  pr-4 md:pr-6 font-semibold'>
                            0{planet.index}-{planet.name}
                        </div>
                        <div className=' absolute w-[95%] bg-cyan-900/50 h-[200px] left-2 top-7 font-Handjet p-10'>
                            <p className=' font-bold'>{planet.title}</p>
                            <p>{planet.description}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePageCard