import { useState } from 'react';
import './App.css';
import { AddTodo } from './MyComponents/AddTodo';
import { Footer } from './MyComponents/Footer';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';

function App() {
  const onDelete = (todo) => {
    console.log(todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const[todos, setTodos] = useState  ([
    {
      sno: 1,
      title: "Go to The Market",
      desc: "You need to go to the market"
    },
    {
      sno: 2,
      title: "Go to The Market 2",
      desc: "You need to go to the market 2"
    },
    {
      sno: 3,
      title: "Go to The Market 3",
      desc: "You need to go to the market 3"
    },
  ])

  return (
    <div classNameName="App">
      <>
        <Header title="My Todo List"/>
        <AddTodo/>
        <Todos todos={todos} onDelete={onDelete}/>
        <Footer/>
      </>
    </div>
  );
}

export default App;
