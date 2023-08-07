import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar, HomePage } from './Components'

const App = () => {
  return (
    <BrowserRouter>
      <div className=' h-full '>
        <NavBar/>
        <Routes>
          <Route exact path="/responsive/" element={<HomePage/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App