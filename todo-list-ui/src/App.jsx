import React, { useState, useEffect, useContext } from 'react';
import Context from './context/context';
import { getTasks, postTask, deleteTask } from './services/tasks';
import './App.css';

function App() {
  const [tasks, setTasks] = useState("");
  const { handleValues, disableButton, values } = useContext(Context);

  useEffect(() => {
    getTasks(setTasks);
  }, [])

  return (
    <div className="App">
      <h1>Todo List</h1>
        <input 
          type="text"
          name="task"
          onChange={ handleValues }
        />
        <label>Status
            <select
              name='status'
              onChange={ handleValues }
            >
              <option value="Pendente">Pendente</option>
              <option value="Em andamento">Em andamento</option>
              <option value="Concluído">Concluído</option>
            </select>
          </label>
        <button
          type="button"
          disabled={ disableButton(values) }
          onClick={ () => postTask(values) }
        >Adicionar</button>
      {tasks.length && tasks.map((task, i) => (
        <div key={ i } className="tasks">
          <h3>{ task.task }</h3>
          <label>Status
            <select
              name='status'
              value={ task.status }
            >
              <option value="Pendente">Pendente</option>
              <option value="Em andamento">Em andamento</option>
              <option value="Concluído">Concluído</option>
            </select>
          </label>
          <p>{ task.created_date.toLocaleString("pt-BR").slice(0, 19).replace("T", " " ) }</p>
          <button 
            type="button"
            value={ task.id }
            onClick={ (e) => deleteTask(e.target.value) }
          >
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
