import ITodo from './types/types'

interface BlockProps {
    todo: ITodo
    changeTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

function Block({todo, changeTodo, removeTodo}: BlockProps) {
    return (
        <div className="block">
            <div className="icon" onClick={() => changeTodo(todo.id)}>
                {/* <FontAwesomeIcon icon="fa-regular fa-square fa-xl" /> */}
                {todo.completed ? <span>&#9745;</span> : <span>&#10066;</span>}
            </div>
            <div className="info">
                <div className="text" id={todo.completed ? 'checked' : ''} onClick={() => changeTodo(todo.id)}>
                    {todo.title}
                </div>
                <div className="delete" onClick={() => removeTodo(todo.id)}>&#10060;</div>
            </div>
        </div>
    )
}

export default Block;