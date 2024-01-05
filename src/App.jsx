import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { Home, Login, ProductDetail, Register } from './components'

function App() {

  return (
    <>
      {/* <h1>Bienvenidos devuelta a FRONTEND 😎😍😘</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/detail/:pid' element={<ProductDetail/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

