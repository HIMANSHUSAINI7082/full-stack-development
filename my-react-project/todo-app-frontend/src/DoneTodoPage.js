function DoneTodoPage(props) {
  let todoArr = props.todo;
  return (
    
    <div className="p-40 flex justify-center items-center bg-green-100 min-h-[200px]">
      

      <table className="table-auto border-collapse border border-green-400 rounded-lg shadow-md w-full max-w-md text-sm">
        
          <tr>
            <th className="border border-green-400 px-4 py-2 text-left">Todo Title</th>
            <th className="border border-green-400 px-4 py-2 text-left">Completed On</th>
          </tr>
          {
            todoArr.map((todo,index) => (
               todo.status === "completed"&&( 
                  <tr key={todo.id} className="bg-white even:bg-green-50 hover:bg-green-100 transition">
                    <td >{todo.todoTitle}</td>
                    <td >{new Date(todo.completionDate).toLocaleDateString}</td>
                  </tr>
                )
              )
            )
          }
        
      </table>
    </div>
  );
}

export default DoneTodoPage;