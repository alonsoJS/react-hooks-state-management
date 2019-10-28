import React from 'react'
import TodoForm from './components/TodoForm/index'
import TodoList from './components/ToDoList/index'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  )
}
