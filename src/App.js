
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartContext } from "./components/context/CartContext"
import { useState } from "react";
import { Cart } from "./components/Cart/Cart";



function App() {

  const [ cart, setCart ] = useState ([])

  const agregarAlcarro = (item)=>{
    setCart ([...cart, item])
  }

  const isincart =(id)=>{
    return cart.some((item)=> item.id === id )
  }

  const cartQuantity =()=>{
    return cart.reduce((acc, item)=>acc+item.cantidad, 0)
  }

   

  return (

    <CartContext.provider value={{
      cart,
      agregarAlcarro,
      isincart
      }} >
      
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos/:categoriaId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>

    </CartContext.provider>

  );
}

export default App;
