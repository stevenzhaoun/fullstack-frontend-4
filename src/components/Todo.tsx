import { useState } from 'react'

export default function Todo() {
    const [todos, setTodos] = useState<{title: string}[]>([])
    const [inputValue, setInputValue] = useState('')
  
    const handleAdd = () => {
      const newTodo = {title: inputValue}
  
      const newTodos = [...todos, newTodo] // spread operator
      setTodos(newTodos)
      setInputValue('')
    }
  
    const handleChange= (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value)
    }
    
    return (
      <div>
        <h1>Todo App</h1>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.title}>{todo.title}</li>
            )
          })}
        </ul>
      </div>
    )
}