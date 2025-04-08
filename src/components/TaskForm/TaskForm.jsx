// TaskForm.jsx
import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      onAddTask({ id: Date.now(), title, description, completed: false });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Añadir Nueva Tarea</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Añadir Tarea
      </button>
    </form>
  );
}

export default TaskForm;
