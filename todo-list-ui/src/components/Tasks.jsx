import React, { useEffect, useContext } from 'react';
import { deleteTask } from '../services/tasks';
import Context from '../context/context';
import HandleEdit from '../hooks/HandleEdit';


function Tasks() {
  const { tasks, handleTasks, handleId, id } = useContext(Context);

  useEffect(() => {
    handleTasks();
  }, [])

  return(
    <div className="task-container">
      {tasks && tasks.map((task, i) => (
        <div key={ i } className="tasks">
          <h3>{ task.task }</h3>
          { HandleEdit(task, id) }
          <p>{ task.created_date.toLocaleString("pt-BR").slice(0, 19).replace("T", " " ) }</p>
          <button 
            type="button"
            value={ task.id }
            onClick={ (e) => deleteTask(e.target.value) }
          >
            Excluir
          </button>
          <button
            onClick={ () => {
              handleId(task.id);
            } }
          >
            Editar
          </button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;