import React from 'react'
import { Link } from 'react-router-dom'

export const AuthOption = () => {
    return (
        <section className="h-[100vh] w-full flex justify-center items-center gap-5 bg-gray-100"> <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
            <h2 className="text-2xl font-bold mb-6 text-black">Welcome to Todo App</h2>
            
            <p> </p>
            <div className="flex justify-center gap-1 flex-col "> 
                <Link to="/login" className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 my-4" > Login </Link>
                <span>
                </span>

                <Link to="/signUp" className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" > Sign-Up </Link> 
                <p className='text-gray-400 text-[.8rem]'>if account not exist please signUp</p>
            </div>
        </div>
        
        </section>
    )
}
