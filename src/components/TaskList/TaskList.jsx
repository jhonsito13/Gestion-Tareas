import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

function TaskList({ tasks, onDelete, onComplete }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No hay tareas para mostrar.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete} // Asegúrate de pasar esta prop
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
