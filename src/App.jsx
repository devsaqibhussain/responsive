import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar, HomePage } from './Components'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/responsive/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App