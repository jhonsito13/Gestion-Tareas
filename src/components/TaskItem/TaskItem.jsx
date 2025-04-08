import React from 'react';

function TaskItem({ task, onDelete, onComplete }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white border border-gray-300 rounded-md shadow-md">
      <div className="mr-4"> {/* Añadimos margen a la derecha */}
        <h3 className="text-lg font-semibold mb-2">{task.title}</h3> {/* Añadimos margen abajo */}
        <p className="text-gray-600">{task.description}</p>
      </div>
      <div className="flex items-center space-x-4">
        {/* Botón de completar tarea */}
        <button
          onClick={() => onComplete(task.id)} // Llamada a la función onComplete con el id de la tarea
          className={`px-4 py-2 rounded ${task.completed ? 'bg-green-600' : 'bg-blue-500'} text-white hover:bg-blue-600`}
        >
          {task.completed ? 'Completada' : 'Completar'}
        </button>

        {/* Botón para eliminar tarea con diseño mejorado */}
        <button
          onClick={() => onDelete(task.id)}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200 ease-in-out flex items-center space-x-2"
        >
          {/* Icono de la papelera */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-2 14H7l-2-14m4-4h8a2 2 0 0 1 2 2v2H5V5a2 2 0 0 1 2-2z"
            />
          </svg>
          <span>Eliminar</span>
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
