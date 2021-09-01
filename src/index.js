import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './styles/variables.css'
import './styles/app.css'
import App from './App'
import Header from './components/Header'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <a className='skip-link' href='#main'>
        Skip to content
      </a>
      <Header />
      <App />
      <Footer />
    </AuthProvider>
  </StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()
