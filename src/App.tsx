import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Comment(props: { title: string, content: string }) {
  console.log(props)
  return (
    <div>
      <h3>Title {props.title}</h3>
      <p>content: {props.content}</p>
    </div>
  )
}

function App() {
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

export default App
