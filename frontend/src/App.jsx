import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='login' element = { <Login />} />
        <Route path='login/register/' element = { <Register />} />
      </Routes>
      <Footer />
    </Router>
      
    </>
  )
}

export default App
