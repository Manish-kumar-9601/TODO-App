import { useContext } from "react"
import { AuthContext } from "../context/authContext"
 

export const useAuthContext=()=>{
    const context=useContext(AuthContext)
    if(!context){
        throw Error("useAuthContext must be used inside and authContextProvider")
    }
    return context
}