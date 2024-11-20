import React, { useState } from 'react'
import { userType } from '../type/userType'
import { User } from '../../../Backend/model/user.model';
import { redirect, useNavigate } from 'react-router-dom';
export const SignUp: React.FC = () => {
const navigate =useNavigate()
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState(null)
    const [experience, setExperience] = useState(null)
    const [profession, setProfession] = useState('')
    const [password, setPassword] = useState('')
    console.log(`onchanges user:${userName} ,email:${email} ,age:${age}, expr:${experience}, prof:${profession},password${password}`);
    const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(import.meta.env.VITE_SIGNUP_URL);
        if (!userName || !password || !age || !email || !profession || !experience) return console.log("not found user", userName, age, email, experience, profession, password);

        try {

            console.log(import.meta.env.VITE_SIGNUP_URL);
            const response = await fetch(import.meta.env.VITE_SIGNUP_URL, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                mode: 'cors',
                body: JSON.stringify({
                    userName,
                    email,
                    age,
                    profession,
                    experience,
                    password
                })
            })
            const resData = response.json();
            console.log(resData);
            navigate("/login")
            setUserName('')
            setEmail("")
            setExperience(null)
            setProfession('')
            setPassword('')
            setAge(null)

        } catch (error) {
            console.error("error in signUp:", error);
        }
    }
    // console.log(user);
    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h2>
                <form method="post" onSubmit={handleForm} className="space-y-4">
                    <div> 
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div> 
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div> 
                        <label className="block text-sm font-medium text-gray-700">Age</label>
                        <input type="number" name="age" onChange={(e) => setAge(e.target.valueAsNumber)} 
                        value={age}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Profession</label>
                        <input type="text" name="profession" onChange={(e) => setProfession(e.target.value)}
                        value={profession}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" /> </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Experience</label>
                        <input type="number" name="experience" onChange={(e) => setExperience(e.target.valueAsNumber)} 
                        value={experience}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} 
                        value={password}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <input type="submit" value="Submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
                    </div>
                </form>
            </div>
        </div>);
}
