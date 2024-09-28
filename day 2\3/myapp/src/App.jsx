import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Counter from './components/Counter'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Use from './components/Use'
import Api from './components/Api'
import Pokemon from './components/Pokemon'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <Navbar />
      <Routes>
   
        <Route path='/l' element={<Login />}></Route>
        <Route path='/s' element={<Signup />}></Route>
        <Route path='/sb' element={<StateBasics />}></Route>
        <Route path='/co' element={<Counter />}></Route>
        <Route path='/us' element={<Use/>}></Route>
        <Route path='/api' element={<Api/>}></Route>
        <Route path='/poki' element={<Pokemon />}></Route>
      </Routes>

      
      
      
    </>
  )
}

export default App
