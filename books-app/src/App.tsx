import { useState } from 'react'
import './App.css'
import 'todomvc-app-css/index.css'
import { Todos } from './components/Todos'
import { type TodoId } from './type'

const mockTodos = [
  {
    id: '1',
    title: 'title 1',
    completed: false
  },
  {
    id: '2',
    title: 'title 2',
    completed: false
  },
  {
    id: '3',
    title: 'title 3',
    completed: false
  }
]

function App (): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemoveTodo = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
      todos={todos}
      onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default App
