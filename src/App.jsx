import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import HomePage from './Components/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import Book from './Components/BookApp/Book'
import SignIn from './Components/SiginIn/SignIn'
import Nail from './Components/NailArt/Nail'
import Lashes from './Components/Lashes/Lashes'
import Wig from './Components/Wig/Wig'

function App() {

  return (
    
    <>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Book' element={<Book/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/Nail' element={<Nail/>}/>
          <Route path='/Lashes' element={<Lashes/>}/>
          <Route path='/Wig' element={<Wig/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
