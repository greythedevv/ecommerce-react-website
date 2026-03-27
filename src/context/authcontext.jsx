import { createContext, useState } from "react"

export const AuthContext = createContext(null)


export const AuthProvider = ({children})=>{
const [user, setUser] = useState(localStorage.getItem("currentUserEmail")? {email:localStorage.getItem("currentUserEmail")}:null )

function signUp(email, password){
const users = JSON.parse(localStorage.getItem("user")|| "[]") 


if(users.find(u =>u.email === email)){
    return{sucess: false, error: "Email already exists"}
}

const newUser = {email, password}
users.push(newUser)
localStorage.setItem("user", JSON.stringify(users))
localStorage.setItem("currentUserEmail", email)

setUser({email })
return {success:true}
}

function login(email, password){
const users = JSON.parse(localStorage.getItem("user")|| "[]")
const user = users.find((u)=>u.email===email && u.password===password )

if(!user){
    return {success: false, error: "invalid email or password"}
}

localStorage.setItem("currentUserEmail", email)
setUser({email})
return{success: true}

}

function logout(){
    localStorage.removeItem("currentUserEmail");
    setUser(null)
}

    
return <AuthContext.Provider value={{signUp, user, login}}>{children}</AuthContext.Provider>
}