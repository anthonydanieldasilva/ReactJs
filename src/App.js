
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"



function App() {

  return (

    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path='/' element={ <ItemListContainer/>}/>
        <Route path='/productos/:categoriaId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element= {<ItemDetailContainer/>}/>
        <Route path='*' element={ <Navigate to="/"/>}/>
      </Routes>
      
    </BrowserRouter>

  );
}

export default App;
