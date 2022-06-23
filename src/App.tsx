import React from 'react';
import axios from 'axios';
import Calculator from "./components/Calculator";

import ToDo from "./components/ToDo";
import ITodo from './todo/types/types';


function App() {

  const [todos, setTodos] = React.useState<ITodo[]>([])

  React.useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
      console.log(response)
      setTodos(response.data)
      console.log(todos, typeof todos)
    }
    catch (error) {
      console.log(error)
    }
  }

  const changeTodo = (id: number) => {
    //copy почему???
    const copy = [...todos];
    const checkedTodo = copy.find(todo => todo.id === id);
    if (checkedTodo !== undefined) {
      checkedTodo.completed = !checkedTodo.completed;
      setTodos(copy)
    }
  }

  const removeTodo = (id: number) => {
    let copy = [...todos];
    const removeTodo = copy.find(todo => todo.id === id);
    if (removeTodo !== undefined) {
      copy = copy.filter(todo => todo.id !== removeTodo.id);
      setTodos(copy)
    }
  }

  const manageTodo = (todos: ITodo[]) => {
    let copy = [...todos];
    let i = 0;
    let newTodos: ITodo[] = [];
    copy.forEach(todo => {
        todo.id = i;
        i++;
        newTodos.push(todo)
    });

    setTodos(newTodos)
  }

  const onEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    ///так предложили на стаковерфлоу
    const key = event.keyCode || event.key;
    if (key === 13) {
        //без as не получалось, взяла со стаковерфлоу
        const value = (event.target as HTMLInputElement).value;
        const copy = [...todos];
        copy.unshift({
          "userId": 1,
          "id": 1,
          "title": value,
          "completed": false
        });
        (event.target as HTMLInputElement).value = '';
        manageTodo(copy);
    }
  }

  return (
    <div className="App">
      <ToDo todos={todos} changeTodo={changeTodo} removeTodo={removeTodo} onEnterPress={onEnterPress}/>
      <Calculator />
    </div>
  );
}

export default App;
