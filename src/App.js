
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./components/context/CartContext";
import { Checkout } from "./components/Checkout/Checkout";



function App() {

  return (

    <CartProvider>
      
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos/:categoriaId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<Navigate to="/" />} />
          <Route path="/Checkout" element={ <Checkout/> } />
        </Routes>

      </BrowserRouter>

    </CartProvider>

  )
}

export default App;
