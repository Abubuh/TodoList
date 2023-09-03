import { useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'

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
  const [todos] = useState(mockTodos)
  return (
    <>
      <Todos
      todos={todos} />
    </>
  )
}

export default App
