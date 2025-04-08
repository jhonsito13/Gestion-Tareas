// TaskForm.jsx
import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      onAddTask({ id: Date.now(), title, description, completed: false });
      setTitle('');
      setDescription('');
    }
    setErrors({
      title: !title ? 'El título es requerido' : '',
      description: !description ? 'La descripción es requerida' : '',
    })
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Añadir Nueva Tarea</h2>
      <div className="mb-4">
      <label htmlFor='titulo' className='block text-gray-700 font-bold mb-2'>    
          Titulo
        </label>
        <input
          type="text"
          placeholder="Título"
          autoFocus
          pattern='[A-Za-Z0-9 ]{3,50}'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full p-2 border rounded-md ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>
      <div className="mb-4">
      <label htmlFor='description' className='block text-gray-700 font-bold mb-2'>    
          Descripcion
        </label>

        <textarea
          placeholder="Descripción"
          value={description}
          pattern='[A-Za-Z0-9 ]{3,50}'
          onChange={(e) => setDescription(e.target.value)}
          className={`w-full p-2 border rounded-md ${errors.description && title ? 'border-red-500' : 'border-gray-300'}`}
        />
         {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Añadir Tarea
      </button>
    </form>
  );
}

export default TaskForm;
