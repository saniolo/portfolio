import React, { useState, useEffect } from "react";
import { MdDarkMode, MdSunny } from "react-icons/md";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import './curiosity.css';

function Curiosity() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([
      { id: 0, title: 'Ti batterò a biliardino 🙃', completed: false },
      { id: 1, title: 'Mi porterai dei taralli con la stracciatella!', completed: false },
      { id: 2, title: 'Guiderò per (quanto?) e chiacchiereremo senza una meta ahah', completed: false },
      { id: 3, title: 'Ti porterò in monopattino e tu non ti dovrai distrarre', completed: false },
      { id: 4, title: 'Tu ordinerai per me, io per te', completed: false },
      { id: 5, title: 'Andare a Santarcangelo per poi cenare in un "posticino" molto carino', completed: false },
    ]);
  }, []);

  const [darkTheme, setDarkTheme] = useState(false);

  const addTask = (title) => {
    const newTask = { id: tasks.length, title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, title) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const getCompletedTasks = () => tasks.filter((task) => task.completed);
  const getRemainingTasks = () => tasks.filter((task) => !task.completed);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div
      className={`hero ${darkTheme ? "bg-gray-900" : "bg-gray-100"
        } h-screen md:min-h-[700px]  w-full m-auto flex flex-col items-center mt-14 transition-all duration-500`}
    >

      <div
        className={`flex flex-col space-y-6 w-[600px] md:w-[100%] z-10 p-4 ${darkTheme ? "text-white" : "text-black"
          }`}
      >
        <div className=" w-full flex items-center justify-between">
          {(
            <MdDarkMode
              onClick={() => null}
              className={`bg-gray-000 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${darkTheme ? "text-transparent" : "text-transparent"
                }`}
              size={32}
            />
          )}
          <div>
            <center>
              <h1 className=" uppercase text-4xl font-bold text-white tracking-widest mb-4 md:text-3xl">
                {/* Task Manager */}
                ----- CIAUUU -----

              </h1>
              <p className=" text-2xl font-bold text-white tracking-widest mb-4 md:text-3xl">
                Hai letto questo nuovo messaggino??
              </p>
            </center>
          </div>

          {darkTheme ? (
            <MdSunny
              onClick={toggleTheme}
              className={`bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${darkTheme ? "text-white" : "text-black"
                }`}
              size={32}
            />
          ) : (
            <MdDarkMode
              onClick={toggleTheme}
              className={`bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${darkTheme ? "text-white" : "text-black"
                }`}
              size={32}
            />
          )}
        </div>
        <div className=" shadow-md">
          <AddTaskForm darkTheme={darkTheme} onAddTask={addTask} />
        </div>
        <div
          className={`scroll ${darkTheme ? "bg-gray-800" : "bg-white"
            } w-full h-[400px] md:h-[500px] px-2 overflow-y-scroll rounded-md shadow-lg relative transition-all duration-500`}
        >
          <div
            className={`w-full overflow-hidden mb- sticky top-0 ${darkTheme ? "bg-gray-800" : "bg-white"
              } flex items-center justify-between text-gray-500 border-b`}
          >
            <p className=" text-gray-500 px-2 py-3">
              {getRemainingTasks().length} tasks left{" "}
            </p>
            <button onClick={clearTasks}>Clear all tasks</button>
          </div>

          {tasks.length ? (
            <TaskList
              tasks={tasks}
              onEditTask={editTask}
              onDeleteTask={deleteTask}
              onToggleCompleted={toggleCompleted}
            />
          ) : (
            <div className=" w-full h-[80%] flex items-center justify-center overflow-hidden">
              <p className=" text-gray-500 text-center z-10">Empty task</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Curiosity;
