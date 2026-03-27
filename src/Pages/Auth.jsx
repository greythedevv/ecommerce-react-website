import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import {AuthContext} from "../context/authcontext"
import { useNavigate } from "react-router-dom"

export const Auth = ()=>{
    const[mode, setMode] = useState("signup")
    const[error, setError]= useState(null)
    const {signUp, user, login} = useContext (AuthContext)
    const {register, handleSubmit, formState:{errors}} = useForm()
    const navigate = useNavigate()

    const onSubmit = (data)=>{
        setError(null)
        let result;
         if(mode === "signup"){
             result = signUp(data.email, data.password)
        }else {
           result = login(data.email, data.password)
        }
        if(result.success){
            alert("yehhh")
           navigate("/")
        }else{
            setError(result.error)
        }
        
    }

    return(
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    {user && <p>user logged in: {user.email}</p>}
                    <h1 className="page-title">{mode==="signup" ?"Sign-Up":"login"}</h1>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        {error && <div className="error-message">{error}</div>}
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-input" id="email" {...register ("email", {required:"Email is required"})}/>
                                {errors.email && (<span className="form-error">{errors.email.message}</span>)}
                                </div>

                                <div className="form-group">
                                 <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-input" id="password" {...register ("password", {required:"Password is required", minLength:{value:8, message:"Password must be at least 8 characters"}, maxLength:{value:12, message:"Password must be at most 12 characters"}})}/>
                                  {errors.password && (<span className="form-error">{errors.password.message}</span>)}
                                </div>

                                <button type="submit" className="btn btn-primary btn-large">{mode==="signup" ?"Sign-Up":"login"}</button>
                                </form>
                                <div className="auth-switch">
                                 {mode ==="signup"?<p>
                                 Already have an account? <span className="auth-link" onClick={()=> setMode("login")}>Login</span>
                                 </p>: <p>
                            Dont have an account? <span className="auth-link" onClick={()=> setMode("signup")}>signup</span>
                        </p>}
                    </div>
                </div>

            </div>
        </div>
    )
}