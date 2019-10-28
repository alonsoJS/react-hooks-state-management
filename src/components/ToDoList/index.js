import React, { useContext } from 'react'
import Todo from './Todo'
import { Store } from '../../store/store'

export default function TodoList() {
  const { state, dispatch } = useContext(Store);

  const todoList = state.todos.map(todo => (
    <Todo
      key={todo.id}
      todoId={todo.id}
      todoText={todo.text}
      todoTag={todo.tag}
      dispatch={dispatch}
    />
  ));

  return <div className="todo-list">{todoList}</div>
}
