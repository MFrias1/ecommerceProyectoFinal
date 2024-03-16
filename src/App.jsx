
import "../src/App.css"
import Navbar from './components/Navbar'
import Banner from './components/banner'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  
  return (
    <>
      <Navbar />
      <Banner />
      <ItemDetailContainer />
    </>
    
  )
}
export default App;
