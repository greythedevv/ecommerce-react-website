import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Auth } from './Pages/Auth'
import { Checkout } from './Pages/checkout'
import { NavBar } from './components/navBar'




function App() {


  return (
    <div className='app'>
        <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
  )
}

export default App
