import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Auth } from './Pages/Auth'
import { Checkout } from './Pages/checkout'
import { NavBar } from './components/navBar'
import { AuthProvider } from './context/authcontext'
import { Products } from './Pages/ProductsDetails'
import { CardProvider } from './context/cardcontext'




function App() {


  return (
    <AuthProvider>
      <CardProvider>
    <div className='app'>
      
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/products/:id' element={<Products/>}/>
      </Routes>
    </div>
    </CardProvider>
    </AuthProvider>
  )
}

export default App
