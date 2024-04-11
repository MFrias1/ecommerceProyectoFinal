
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { CartProvider } from './context/cartContext';
import CartPage from './components/CartPage'
import "../src/App.css"

function App() {
  
  return (
    <>
    {/*ejecuto cartprovider */}
      <CartProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/cart'element={<CartPage/>}/>
            <Route path='/categorias/:id' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        </Router>
      </CartProvider>
    </>
    
  )
}
export default App;
