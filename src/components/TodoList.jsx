import useTodoStore from "../store/useTodoStore";
import TodoItem from "./TodoItem";


const TodoList = () => {
    const todos = useTodoStore((state)=> state.todos)

  return (
    <ul className="todo-list">
        {todos.length > 0 ? (
            todos.map((todo)=><TodoItem key={todo.id} todo={todo}/>)
        ) : (
            <p>Nenhuma tarefa adicionada</p>
        
        )}

    </ul>
  )
}

export default TodoList