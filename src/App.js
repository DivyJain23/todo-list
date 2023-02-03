import { useState, useEffect } from 'react';
import './App.css';
import { AddTodo } from './MyComponents/AddTodo';
import { Footer } from './MyComponents/Footer';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() { 
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
   }, [todos])

  const onDelete = (todo) => {
    console.log(todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
  }

  return (
    <div className="">
      <>
        <Header title="My Todo List" />
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer />
      </>
    </div>
  );
}

export default App;
