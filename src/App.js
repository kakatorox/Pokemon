import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Navbars from './components/NavBars';
import Detalle from './views/Detalle';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pokemones/" element={<Pokemones />} />
          <Route path="/Detalle/:nombre" element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
