// Formulário para Adicionar Tarefas

import { useState } from "react";
import useTodoStore from "../store/useTodoStore";


const TodoForm = () => {
    const [text, setText] = useState('')
    const addTodo = useTodoStore((state)=>state.addTodo)

    const handlesubmit = (e) => {
        e.preventDefault()
        if (text.trim()){
            addTodo(text)
            setText('')
        }
    }

  return (
    <form onSubmit={handlesubmit} className="todo-form">
        <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicione uma tarefa"
        />
        <button type="submit">Adicionar</button>
    </form>
  )
}

export default TodoForm