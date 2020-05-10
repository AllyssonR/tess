import React from 'react';
import Primeiro from './Components/Primeiro';
import ComParametro from './Components/ComParametro';
import './App.css';
const App  = ()=> (
  <React.StrictMode>
  <Primeiro/>
  <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo"/>
  </React.StrictMode>
);

export default App;
