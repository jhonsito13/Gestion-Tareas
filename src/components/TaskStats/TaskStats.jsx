// TaskStats.jsx
import React from 'react';

function TaskStats({ tasks }) {
  const activeTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full max-w-md mt-6 text-center">
      <p className="text-lg">Tareas Pendientes: {activeTasks}</p>
    </div>
  );
}

export default TaskStats;
