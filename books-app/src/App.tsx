import { useState } from 'react'
import 'todomvc-app-css/index.css'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType } from './type'

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

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
      todos={todos}
      onToggleCompleteTodo={handleCompleted}
      onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default App
