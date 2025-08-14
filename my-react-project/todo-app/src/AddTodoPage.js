import { useState } from 'react';

function AddTodoPage({ todo, setTodo }) {
  const [formData, setFormData] = useState({
    todoTitle: '',
    dueDate: '',
    status: 'pending',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setTodo(prev => [
      ...prev,
      {
        id: Date.now(),
        todoTitle: formData.todoTitle,
        dueDate: formData.dueDate,
        status: formData.status,
        completeDate: '',
      },
    ]);

    alert('Todo added!');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-300 to-sky-500 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-2xl overflow-hidden border border-blue-200">
        <div className="bg-sky-100 p-6">
          <h2 className="text-sky-900 text-4xl font-bold text-center">Add Todo</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-white">
          <div>
            <label className="block text-sm font-medium text-sky-800 mb-1">Todo Title</label>
            <input
              type="text"
              name="todoTitle"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-sky-300 bg-sky-50 text-sky-900 placeholder-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Enter your task"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-sky-800 mb-1">Due Date</label>
            <input
              type="date"
              name="dueDate"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-sky-300 bg-sky-50 text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 hover:brightness-110 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTodoPage;
