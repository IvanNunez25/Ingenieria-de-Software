import logo from './logo.svg';
import './App.css';
import ComponenteShowPrueba from './prueba/ShowPrueba';
import ComponenteCreatePrueba from './prueba/CreatePrueba';
import ComponenteEditPrueba from './prueba/EditPrueba';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ComponenteShowPrueba />} />
          <Route path='/create' element={<ComponenteCreatePrueba />} />
          <Route path='/edit/:id' element={<ComponenteEditPrueba />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
