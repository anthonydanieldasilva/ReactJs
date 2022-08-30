import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemCount } from "./components/ItemCount";


function App() {

  return (
    <div>

      <NavBar/>
      <ItemListContainer/> 
      <ItemCount stock="5"/>

    </div>
  );
}

export default App;
