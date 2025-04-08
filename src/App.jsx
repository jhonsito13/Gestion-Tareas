import React, { useState } from 'react';
import TaskFilter from './components/TaskFilter/TaskFilter.jsx';
import TaskList from './components/TaskList/TaskList.jsx';
import TaskForm from './components/TaskForm/TaskForm.jsx';
import TaskStats from './components/TaskStats/TaskStats.jsx';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
  });

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-md">Gestión de Tareas</h1>
      <TaskForm onAddTask={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} onDelete={deleteTask} onComplete={handleComplete} />
      <TaskStats tasks={tasks} />
    </div>
  );
}

export default App;
