// Item da Lista de Tarefas
import useTodoStore from "../store/useTodoStore";


const TodoItem = ({todo}) => {
    const toggleTodo = useTodoStore((state) => state.toggleTodo)
    const removeTodo = useTodoStore((state) => state.removeTodo)

  return (
    <li className={`todo-item ${todo.completed ? 'completed':''}`}>
        <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
        <button onClick={()=>removeTodo(todo.id)}>Remover</button>
    </li>
  )
}

export default TodoItem