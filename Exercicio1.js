/*: Contador Simples com useState*/

import React, { useState } from 'react';

var Contador = () => {
  var [numero, setNumero] = useState(0);

  var incrementar = () => setNumero(numero + 1);
  var decrementar = () => setNumero(numero - 1);

  return (
    <div>
      <h1>{numero}</h1> {}
      <button onClick={incrementar}>+1</button> {}
      <button onClick={decrementar}>-1</button> {}
    </div>
  );
}

export default Contador;
