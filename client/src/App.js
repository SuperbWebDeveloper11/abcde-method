import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  // useEffect events
  useEffect(() => {
    const refreshTasks = async () => {
      await fetchAndSetTasks();
    };
    refreshTasks();
  }, []);
  // fetch tasks from server & set them to the state using setTasks
  const fetchAndSetTasks = async () => {
    try {
      // fetch tasks from server
      const response = await axios.get("http://localhost:8000/tasks/");
      const tasks = await response.data;
      // set tasks to the state using setTasks
      setTasks(tasks);
    } catch (error) {
      console.log("Error while fetching tasks");
      console.error(error);
    }
  };
  // add new task & call fetchAndSetTasks() method
  const addTask = async (task) => {
    try {
      // add new task
      const response = await axios.post("http://localhost:8000/tasks/", task);
      const newTask = await response.data;
      console.log(newTask);
      // call fetchAndSetTasks() method
      await fetchAndSetTasks();
    } catch (error) {
      console.error(error);
    }
  };
  // delete task & call fetchAndSetTasks() method
  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/tasks/${id}/`);
      const res = await response.data;
      console.log(res);
      //  call fetchAndSetTasks() method
      await fetchAndSetTasks();
    } catch (error) {
      console.error(error);
    }
  };
  // fetch task & edit task & call fetchAndSetTasks() method
  const editTask = async (id) => {
    try {
      // fetch task
      const response = await axios.get(`http://localhost:8000/tasks/${id}/`);
      const task = await response.data;
      const obj = { ...task, finished: !task.finished };
      // edit task
      const res = await axios.put(`http://localhost:8000/tasks/${id}/`, obj);
      const newTask = await res.data;
      console.log(newTask);
      // call fetchAndSetTasks() method
      await fetchAndSetTasks();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container app">
      <Header />
      <AddTask onAddTask={addTask} />
      <Tasks tasks={tasks} onDeleteTask={deleteTask} onEditTask={editTask} />
      <Footer />
    </div>
  );
}

export default App;
