import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const today = new Date().toISOString().slice(0, 10);
  const priorities = [
    "Most Important (A)",
    "Have Minor Consequences (B)",
    "Have No Consequences (C)",
    "For Delegate (D)",
    "For Eliminate (E)",
  ];
  const [text, setText] = useState("");
  const [date, setDate] = useState(today);
  const [priority, setPriority] = useState(priorities[0]);
  const [finished, setFinished] = useState(false);
  const validateTask = (e) => {
    e.preventDefault();
    // validate text
    if (!text) {
      alert("Please Enter Your Task");
      return;
    }
    if (!date) {
      alert("Please Enter a date");
      return;
    }
    const task = {
      text: text,
      date: date,
      finished: finished,
      priority: priority,
    };
    onAddTask(task);

    setText("");
    setDate(today);
    setPriority(priorities[0]);
    setFinished(false);
  };
  return (
    <div className="add-task">
      <form onSubmit={validateTask}>
        <div className="row">
          <div className="form-group col-md-4">
            <label htmlFor="">Text:</label>
            <input
              type="text"
              placeholder="type new task"
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="">Date:</label>
            <input
              type="date"
              placeholder="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="">Priority:</label>
            <select
              className="form-control"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              {priorities.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <br />
          {/* <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            value={finished}
            onChange={(e) => setFinished(e.currentTarget.checked)}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Finished
          </label>
        </div> */}
        </div>

        <br />
        <div>
          <button type="submit" className="btn btn-success">
            <i className="bi bi-plus-lg"></i> add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
