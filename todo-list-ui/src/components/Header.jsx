import React, { useContext } from 'react';
import Context from '../context/context';
import { postTask } from '../services/tasks';

function Header() {
  const { handleValues, disableButton, values } = useContext(Context);

  return(
    <div>
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
    </div>
  );
}

export default Header;
