import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import About from './components/About/About'
import Compare from './components/Compare/Compare'
import Chats from './components/Chats/Chats'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='login' element = { <Login />} />
        <Route path='login/register/' element = { <Register />} />
        <Route path='/about' element = {<About />} />
        <Route path='/compare' element = {<Compare />} />
        <Route path='/chats' element = {<Chats />} />
      </Routes>
      <Footer />
    </Router>
      
    </>
  )
}

export default App
