import React from "react";
import { Base_URL } from "./utils/Constants";
import { Bars3Icon, XMarkIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  const Tabs =[
    {name: "Home", link: `${Base_URL}/`},
    {name: "About", link: `${Base_URL}/`},
    {name: "Contact", link: `${Base_URL}/`},
  ]
  const [open, setopen] = useState(false)
  const menuFunction = () =>{
    {open? setopen(false): setopen(true)}
  }

  return (
    <nav className=" font-REM">
      <div className=" flex justify-center md:justify-between">
        <div className=" w-[50px] h-[50px] m-5 text-white">
          <GlobeEuropeAfricaIcon/>
        </div>
        <div >
            <div className=" text-white  md:pointer-events-none md:hidden relative z-20" onClick={()=> menuFunction()}>
                { !open? <Bars3Icon className=" w-[30px] fixed right-5 top-5"/> : <XMarkIcon className=" w-[30px] fixed right-5 top-5"/> }
            </div>
          <ul className={`text-white z-10 md:flex h-screen md:h-[50px] items-center gap-10 text-xl font-semibold md:my-5 md:pr-5 px-4 pt-10 md:pt-0 md:pl-[300px] bg-gray-600/25 md:bg-gray-400/25 backdrop-blur rounded-lg md:rounded-l-full md:static fixed ${!open? "-right-[100%]": "right-[0%]"} duration-500 `}>
            
            
            {Tabs.map((tab,index)=>{
              return(
                <Link key={index} to={tab.link}>
                  <li
                    className="border-b-2 border-gray-100/50 md:border-transparent hover:border-gray-300 duration-300 px-20 md:px-0 py-4 md:py-2 my-2 md:my-0">
                    {tab.name}
                  </li>
                
                </Link>
                
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
