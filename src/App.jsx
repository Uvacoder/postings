import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './views/Dashboard'

export default function App() {
  return (
    <Router>
      <a className='skip-link' href='#main'>
        Skip to content
      </a>
      <Header />
      <main id='main'>
        <Switch>
          <Route path='/' exact>
            <Dashboard />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}
