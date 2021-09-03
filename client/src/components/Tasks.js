const Tasks = ({ tasks, onDeleteTask, onEditTask }) => {
  return (
    <div className="tasks">
      <div className="row">
        <div className="col-md-7">
          <b>Tasks</b>
        </div>
        <div className="col-md-4">
          <b>Priorities</b>
        </div>
        <div className="col-md-1">
          <b>Delete</b>
        </div>
      </div>
      <br />
      {tasks.map((task) => (
        <div
          className={
            task.finished
              ? "row mb-1 finished-task row"
              : "row mb-1 unfinished-task row"
          }
          key={task.id}
        >
          <div className="col-md-7" onDoubleClick={() => onEditTask(task.id)}>
            {task.text} <br />
            {task.date}{" "}
          </div>
          <div className="col-md-4">
            {task.priority} <br />
          </div>
          <div className="col-md-1">
            <button
              className="btn btn-danger"
              onClick={() => onDeleteTask(task.id)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
