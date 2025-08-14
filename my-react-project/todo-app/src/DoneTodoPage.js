function DoneTodoPage(props) {
  let todoArr = props.todo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-violet-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-4xl border border-pink-200">
        {/* Header */}
        <div className="bg-violet-100 p-6 border-b border-pink-300">
          <h2 className="text-violet-900 text-4xl font-bold text-center">✅ Completed Todos</h2>
        </div>

        {/* Table */}
        <div className="p-6 overflow-auto">
          <table className="w-full table-auto border-collapse text-violet-900 text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-pink-400 to-rose-500 text-white">
                <th className="px-4 py-3 text-left border border-pink-200">Todo Title</th>
                <th className="px-4 py-3 text-left border border-pink-200">Completed On</th>
              </tr>
            </thead>
            <tbody>
              {todoArr.map((todo) =>
                todo.status === "completed" ? (
                  <tr
                    key={todo.id}
                    className="bg-white even:bg-rose-50 hover:bg-violet-50 transition-colors duration-300"
                  >
                    <td className="px-4 py-2 border border-pink-200">{todo.todoTitle}</td>
                    <td className="px-4 py-2 border border-pink-200">
                      {todo.completedDate
                        ? new Date(todo.completedDate).toLocaleDateString()
                        : "N/A"}
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <footer className="bg-violet-50 text-center py-3 text-rose-600 text-xs">
          Showing {todoArr.filter(t => t.status === "completed").length} completed task(s)
        </footer>
      </div>
    </div>
  );
}

export default DoneTodoPage;
