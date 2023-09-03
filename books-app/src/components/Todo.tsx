import { type TodoId, type Todo as TodoType } from '../type'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
  return (
        <div>
            <input type='checkbox'
            className="toggle"
            />
            <label>{title}</label>
            <button
            className='destroy'
            onClick={() => { onRemoveTodo({ id }) }}></button>
        </div>
  )
}
