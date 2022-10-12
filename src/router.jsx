import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/pages/Cart/Cart'
import Home from './components/pages/Home/Home'

export default function Router() {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/> */}
      </Routes>
    </div>
  )
}
