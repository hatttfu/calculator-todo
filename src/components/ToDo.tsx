import React from 'react'
import Block from '../todo/Block';
import ITodo from '../todo/types/types';
import TaskInput from '../todo/TaskInput'

interface TodoProps {
    todos: ITodo[],
    changeTodo: (id: number) => void,
    removeTodo: (id: number) => void,
    onEnterPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

function ToDo ({todos, changeTodo, removeTodo, onEnterPress}:TodoProps) {

    return (
        <div className="container">
            <div className="title">
                WHAT TO DO?
            </div>
            <TaskInput onEnterPress={onEnterPress}/>
            <div className="todo-container">
                <div className="todo-list">
                    {todos.map(todo => 
                        <Block key={todos.indexOf(todo)} changeTodo={changeTodo} removeTodo={removeTodo} todo={todo}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ToDo