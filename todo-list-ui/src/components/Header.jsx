import React, { useContext } from 'react';
import Context from '../context/context';
import { postTask } from '../services/tasks';

function Header() {
  const { handleValues, disableButton, values } = useContext(Context);

  return(
    <div>
       <h1>Todo List</h1>
        <input
          className="input-header" 
          type="text"
          name="task"
          onChange={ handleValues }
          placeholder="Escrever Tarefa"
        />
        <label className="label-header">
            <span>
              STATUS:
            </span>
            <select
              className="select-header"
              name='status'
              onChange={ handleValues }
            >
              <option value="Pendente">Pendente</option>
              <option value="Em andamento">Em andamento</option>
              <option value="Concluído">Concluído</option>
            </select>
          </label>
        <button
          className="btn-header"
          type="button"
          disabled={ disableButton(values) }
          onClick={ () => postTask(values) }
        >Adicionar</button>
    </div>
  );
}

export default Header;
