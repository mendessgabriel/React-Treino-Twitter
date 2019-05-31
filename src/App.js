import React, { Component, Fragment } from 'react';
import './App.css';
import Cabecalho, { Botao } from './components/cabecalho';

function App() {
  return (
    <Fragment>
      <Cabecalho></Cabecalho>
      <Botao>Botão sem Ação</Botao>
    </Fragment>
  );
}

export default App;
