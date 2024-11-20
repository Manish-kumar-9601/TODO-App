import React, { useReducer } from "react";

export const AuthContext=React.createContext("unauthorized")
export const authReducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {user:action.payload}
        case "LOGOUT":
            return {user:null}
        default :
        return state
    }
}
export const AuthContextProvider=({children})=>{
const [state,dispatch]=useReducer(authReducer,{
    user:null
})
console.log("auth state",state);
<AuthContext.Provider value={{...state,dispatch}}>
    {children}
</AuthContext.Provider>
}