import React from 'react'
import ReactDOM from 'react-dom/client'
import RegisterForm from './components/RegisterForm'
import 'normalize.css'
import './assets/styles.module.scss'
import TodoList from './components/TodoList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
)
