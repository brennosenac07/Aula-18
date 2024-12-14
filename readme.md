# Brenno Elimar

## 1. Contador Simples (`Contador`)

**Resumo**:
Um componente React que exibe um contador simples com dois botões: um para incrementar e outro para decrementar o valor do contador.

**Código**:

```javascript
import React, { useState } from 'react';

var Contador = () => {
  var [numero, setNumero] = useState(0);

  var incrementar = () => setNumero(numero + 1);
  var decrementar = () => setNumero(numero - 1);

  return (
    <div>
      <h1>{numero}</h1>
      <button onClick={incrementar}>+1</button>
      <button onClick={decrementar}>-1</button>
    </div>
  );
};

export default Contador;
```

**Explicação**:
- `useState(0)`: Define o estado inicial como 0.
- `incrementar` e `decrementar`: Alteram o valor do estado.
- Retorno do JSX: Exibe o número e dois botões para modificar o estado.


---

## 2. Botão Alternador (`BotaoAlternador`)

**Resumo**:
Um componente React que alterna entre dois estados (`Ligado` e `Desligado`) ao clicar em um botão.

**Código**:

```javascript
import React, { useState } from 'react';

var BotaoAlternador = () => {
  var [estado, setEstado] = useState('Desligado'); 

  var alternarEstado = () => {
    setEstado((prevEstado) => (prevEstado === 'Desligado' ? 'Ligado' : 'Desligado'));
  };

  return (
    <button onClick={alternarEstado}>
      {estado}
    </button>
  );
};

export default BotaoAlternador;
```

**Explicação**:
- `useState('Desligado')`: Define o estado inicial.
- `alternarEstado`: Alterna entre os estados `Ligado` e `Desligado`.
- Retorno do JSX: Um botão que exibe o estado atual e permite alternar.

---

## 3. Lista de Tarefas (`ListaDeTarefas`)

**Resumo**:
Um componente React para gerenciar uma lista de tarefas. Permite adicionar novas tarefas que são exibidas em uma lista.

**Código**:

```javascript
import React, { useState } from 'react';

function ListaDeTarefas() {
  var [tarefas, setTarefas] = useState([]);
  var [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa) {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite a tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
```

**Explicação**:
- `useState([])` e `useState('')`: Criam estados para a lista e nova tarefa.
- `adicionarTarefa`: Adiciona uma tarefa e limpa o campo de texto.
- Retorno do JSX: Campo de entrada, botão para adicionar e lista de tarefas.


---

