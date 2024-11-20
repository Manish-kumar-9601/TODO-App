import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TodoInput } from '../components/todoInput'
import { TodoList } from '../components/todoList'

export const TodoPage = () => {
    const navigate = useNavigate()
    const [todoList, setTodoList] = useState([])
    const [change, setChange] = useState(false)
    const userId = "673359729b72b22631a3ce5e"

    useEffect(() => {
        console.log("effect");
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_GET_URL}/${userId}`,
                    {
                        method: "GET", headers:
                            { "Content-type": "application/json" },
                    });
                if (!response.ok) {
                    throw new Error('Network response was not ok');

                }
                const res = await response.json();
                console.log(res); 
                setTodoList(res);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        }; fetchData();
        console.log("effected");
        setTimeout(() => {
            
fetchData()
        },100)
    }, [change]);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Todo App</h2>
                <TodoInput setChange={setChange} userId={userId} isEditing={undefined} currentTodoId={undefined} currentTodoTitle={undefined} currentTodo={undefined} />
                <TodoList todos={todoList} setChange={setChange} />
            </div>
        </div>
    )
}

