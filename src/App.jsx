import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Auth } from './Pages/Auth'
import { Checkout } from './Pages/checkout'
import { NavBar } from './components/navBar'
import { AuthProvider } from './context/authcontext'




function App() {


  return (
    <AuthProvider>
    <div className='app'>
      
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
    </AuthProvider>
  )
}

export default App
