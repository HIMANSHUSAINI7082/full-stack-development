// App.js
import React, { useState } from 'react';
import FruitList from './FruitList';
import AddingTailwind from './AddingTailwind';
import './index.css';

function App() {
  const [view, setView] = useState('fruits'); // fruits OR tailwind

  return (
    <div className="p-4">
      {/* Buttons to switch */}
      <div className="mb-4 space-x-2">
        <button onClick={() => setView('fruits')} className="bg-blue-500 text-white px-4 py-2 rounded">
          Show Fruit List
        </button>
        <button onClick={() => setView('tailwind')} className="bg-green-500 text-white px-4 py-2 rounded">
          Show Tailwind Demo
        </button>
      </div>

      {/* Show FruitList */}
      {view === 'fruits' && (
        <div>
          <h1 className="text-xl font-bold">My Fruit List</h1>
          <FruitList />
        </div>
      )}

      {/* Show Tailwind Component */}
      {view === 'tailwind' && (
        <div>
          {/* Internal CSS */}
          <style>
            {`p { color: red; }`}
          </style>

          {/* Inline CSS */}
          <h1 style={{ color: 'blue' }}>My React is Working</h1>
          <p>This is my p tag</p>
          <h2>This is my external css styling</h2>

          {/* Tailwind Component */}
          <AddingTailwind />
        </div>
      )}
    </div>
  );
}

export default App;
