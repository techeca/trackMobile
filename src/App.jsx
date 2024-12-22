import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './components/Welcome'
import Register from './components/Register'
import Register2 from './components/Register2'
import Login from './components/Login'
import Home from './components/Home'
import SpendAndBudget from './components/SpendAndBudget'
import Calendar from './components/Calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-wrap gap-3 m-3'>

      <Welcome />
      <Register />
      <Register2 />
      <Login />
      <Home />
      <SpendAndBudget />
      <Calendar />
    </div>
  )
}

export default App
