import { callGetAllAPI, callUpdateAPI } from "./BackendAPI";

function ShowTodoPage(props) {
  const todoArr = props.todo;

  async function handleClick(e, todoId) {
    
    await callUpdateAPI( 
      '/update-todo', 
      {status: "completed", completedDate: new Date() },
      {'todoId':todoId}
    )
    let todoList = await callGetAllAPI('/read-todos');
    props.setTodo(todoList);
  }

  return (
    <div className="bg-purple-200 h-[200px] flex justify-center items-center p-45">
      <table className="table-auto border-collapse border border-purple-500 rounded-lg shadow-lg w-full max-w-md">
        <thead className="bg-purple-600 text-white">
          <tr>
            <th className="border border-purple-400 px-3 py-2 text-left text-sm">Todo Title</th>
            <th className="border border-purple-400 px-3 py-2 text-left text-sm">Due Date</th>
            <th className="border border-purple-400 px-3 py-2 text-center text-sm">Mark Done</th>
          </tr>
        </thead>
        <tbody>
          {todoArr.map((value) => (
            value.status=="pending" && (
            <tr
              key={value.todoId}
              className="bg-white even:bg-purple-100 hover:bg-purple-200 transition-colors duration-300"
            >
              <td className="border border-purple-400 px-3 py-2 text-sm">{value.todoTitle}</td>
              <td className="border border-purple-400 px-3 py-2 text-sm">{value.dueDate}</td>
              <td className="border border-purple-400 px-3 py-2 text-center">
                <button
                  onClick={(e) => handleClick(e, value.todoId)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-2 py-1 rounded-md shadow transition text-sm"
                >
                  ✅
                </button>
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowTodoPage;