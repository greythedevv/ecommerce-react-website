import { useContext } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/authcontext"
export const NavBar = ()=>{

const {user, logout} = useAuth()
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">ShopHub</Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/checkout" className="navbar-link">Checkout</Link>
                </div>
                <div className="navbar-auth">
                  {!user ?  <div className="navbar-auth-link">
                        <Link to="/auth" className="btn btn-secondary">Login</Link>
                        <Link to="/auth" className="btn btn-primary">Sign up</Link> 
                    </div>  : (<div className="navbar-user">  <span className="navbar-greeting">Hello, {user.email}</span> <button className="btn btn-secondary" onClick={logout}>Log out</button></div>) }
                </div>

            </div>
        </nav>
    )
}