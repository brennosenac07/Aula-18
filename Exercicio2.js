/*Gerenciando uma Lista de Tarefas*/

import React, { useState } from 'react';

var BotaoAlternador = () => {
  var [estado, setEstado] = useState('Desligado'); 

  var alternarEstado = () => {
    setEstado((prevEstado) => (prevEstado === 'Desligado' ? 'Ligado' : 'Desligado'));
  };

  return (
    <button onClick={alternarEstado}>
      {estado} {}
    </button>
  );
};

export default BotaoAlternador;
