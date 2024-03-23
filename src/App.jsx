
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import "../src/App.css"

function App() {
  
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categorias/:id' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </Router>
    </>
    
  )
}
export default App;
