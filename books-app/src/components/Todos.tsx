import { type ListOfTodos, type TodoId } from '../type'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  return (
        <ul className='todo-list'>
          {
            todos.map(todo => (
              <li key={todo.id}>
                <Todo
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                onRemoveTodo={onRemoveTodo}
                />
              </li>
            ))
          }
        </ul>
  )
}
