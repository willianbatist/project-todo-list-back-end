import React, { useEffect, useContext } from 'react';
import { deleteTask } from '../services/tasks';
import Context from '../context/context';

function Tasks() {
  const { tasks, handleTasks } = useContext(Context);

  useEffect(() => {
    handleTasks();
  }, [])

  return(
    <div>
      {tasks && tasks.map((task, i) => (
        <div key={ i } className="tasks">
          <h3>{ task.task }</h3>
          <p>{ task.status }</p>
          <p>{ task.created_date.toLocaleString("pt-BR").slice(0, 19).replace("T", " " ) }</p>
          <button 
            type="button"
            value={ task.id }
            onClick={ (e) => deleteTask(e.target.value) }
          >
            Excluir
          </button>
          <button>Editar</button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;