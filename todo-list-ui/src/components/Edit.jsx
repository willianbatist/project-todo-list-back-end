import PropTypes from 'prop-types';
import { putTask } from '../services/tasks';

function Edit(props) {
  const { status, task } = props;

  return(
    <div>
      <label className="label-header">
            <span>
              STATUS:
            </span>
            <select
              className="select-header"
              name='status'
              defaultValue={ status }
              onClick={ (e) => {
                putTask(task.id, task.task, e.target.value);
              } }
            >
              <option value="Pendente">Pendente</option>
              <option value="Em andamento">Em andamento</option>
              <option value="Concluído">Concluído</option>
            </select>
          </label>
    </div>
  );
}

Edit.propTypes = {
  task: PropTypes.node.isRequired,
  status: PropTypes.node.isRequired,
};

export default Edit;