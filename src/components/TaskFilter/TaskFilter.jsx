import React from 'react';

function TaskFilter({ filter, setFilter }) {
  return (
    <div className="flex justify-center items-center space-x-4 mb-6">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-600' : 'bg-blue-500'} text-white hover:bg-blue-600`}
      >
        Todas
      </button>
      <button
        onClick={() => setFilter('active')}
        className={`px-4 py-2 rounded ${filter === 'active' ? 'bg-yellow-600' : 'bg-yellow-500'} text-white hover:bg-yellow-600`}
      >
        Activas
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`px-4 py-2 rounded ${filter === 'completed' ? 'bg-green-600' : 'bg-green-500'} text-white hover:bg-green-600`}
      >
        Completadas
      </button>
    </div>
  );
}

export default TaskFilter;
