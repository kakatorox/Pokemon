import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Navbars from './components/NavBars';
import Detalle from './views/Detalle';
import NotFound from './views/NotFound';
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="Pokemon">
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pokemones/" element={<Pokemones />} />
          <Route path="/Detalle/:nombre" element={<Detalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
