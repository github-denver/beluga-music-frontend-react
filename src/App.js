import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'

function App() {
  return (
    <div className="App">
      <Route component={Index} path={['/']} exact />
    </div>
  )
}

export default App
