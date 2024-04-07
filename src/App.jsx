import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Componentes/Menu'; // Asegúrate de que este componente esté correctamente importado
import Inicio from './Vistas/Inicio'; // Importa tus componentes aquí
import Contacto from './Vistas/Contacto';
import Defecto from './Vistas/Defecto';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<Defecto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


