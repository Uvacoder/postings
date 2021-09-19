import React from 'react'
import ReactDOM from 'react-dom'
import './styles/variables.css'
import './styles/app.css'
import App from './App'
import { UserProvider } from './stores/User'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
