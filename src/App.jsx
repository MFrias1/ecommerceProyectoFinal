import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import ItemListConteiner from '../components/ItemListConteiner'

function App() {
  
  return (
    <>
    <Navbar/>
    <ItemListConteiner items="hola"/>
    </>
  )
}

export default App
