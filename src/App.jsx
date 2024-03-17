
import "../src/App.css"
import Navbar from './components/Navbar'
import Banner from './components/banner'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from "./components/ItemListContainer"

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
        <Banner />
        <ItemDetailContainer />
      </Router>
    </>
    
  )
}
export default App;
