function ShowTodoPage(props) {
  const todoArr = props.todo;

  function handleClick(e, todoId) {
    const newTodoArr = todoArr.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          status: "completed",
          completedDate: new Date()
        };
      }
      return todo;
    });

    props.setTodo(newTodoArr);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-violet-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-4xl overflow-hidden border border-pink-200">
        {/* Header */}
        <div className="bg-violet-100 p-6 border-b border-pink-300">
          <h2 className="text-violet-900 text-3xl font-bold text-center">📝 Pending Todos</h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse text-violet-900 text-sm">
            <thead className="bg-gradient-to-r from-pink-400 to-rose-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left border-b border-pink-200">Todo Title</th>
                <th className="px-4 py-3 text-left border-b border-pink-200">Due Date</th>
                <th className="px-4 py-3 text-center border-b border-pink-200">Mark Done</th>
              </tr>
            </thead>
            <tbody>
              {todoArr.map((value) =>
                value.status === "pending" ? (
                  <tr
                    key={value.id}
                    className="bg-white even:bg-rose-50 hover:bg-pink-50 transition-colors duration-300"
                  >
                    <td className="px-4 py-2 border-t border-pink-200">{value.todoTitle}</td>
                    <td className="px-4 py-2 border-t border-pink-200">{value.dueDate}</td>
                    <td className="px-4 py-2 border-t border-pink-200 text-center">
                      <button
                        onClick={(e) => handleClick(e, value.id)}
                        className="bg-gradient-to-r from-green-400 to-emerald-500 hover:brightness-110 text-white font-semibold px-3 py-1 rounded-md shadow transition"
                      >
                        ✅
                      </button>
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowTodoPage;
