import Edit from "../components/Edit";

export default function HandleEdit(task, id) {
  if (task.id === id) {
    return(
      <Edit status={ task.status } task={ task }/>
    );
  }
  return(
    <p>{ task.status }</p>
  );
}