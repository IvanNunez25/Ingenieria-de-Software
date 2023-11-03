import logo from './logo.svg';
// import './App.css';
import ComponenteShowPrueba from './prueba/ShowPrueba';
import ComponenteCreatePrueba from './prueba/CreatePrueba';
import ComponenteEditPrueba from './prueba/EditPrueba';

import DatosPage from './graficas/DatosPage';
import Inicio from './graficas/Inicio';
import Dashboard from './prueba/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        | <Route path='/' element={<Dashboard />} />
          <Route path='/create' element={<ComponenteCreatePrueba />} />
          <Route path='/edit/:id' element={<ComponenteEditPrueba />} />
          {/* <Route path="/" element={<Inicio />} />
          <Route path="/datos" element={<DatosPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
