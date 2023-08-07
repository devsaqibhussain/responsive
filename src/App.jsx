import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar, HomePage } from './Components'
const App = () => {
  return (
    <BrowserRouter>
      <div className='h-screen bg-page-bg bg-center bg-cover bg-fixed overflow-y-hidden'>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App