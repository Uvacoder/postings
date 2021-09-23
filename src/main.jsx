import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
import App from './App'
import { Provider } from './app/store'
import './styles/app.css'

ReactDOM.render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
