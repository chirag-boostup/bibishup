import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Route, Routes } from 'react-router-dom'
import Home from './layout/Home'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App