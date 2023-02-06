import React from 'react';
import { Emptyplaceholder } from './Common/Emptyplaceholder';
import { TodoItem } from './TodoItem';

export const Todos = (props) => { 
  let myStyles ={
    minHeight : '60vh'
  }
  return (
    <div className='container my-3' style={myStyles}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length === 0 ? <Emptyplaceholder desc="No Todos Found" /> :
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}></TodoItem> 
            )
          })}
          
    </div>
  )
}
