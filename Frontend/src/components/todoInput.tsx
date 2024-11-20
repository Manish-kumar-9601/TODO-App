import React, { useState } from 'react'
export const TodoInput = ({ setChange, isEditing, currentTodoId, currentTodoTitle, currentTodo, userId }) => {
    const [addTodoTitle, setAddTodoTitle] = useState('');
    const [addTodo, setAddTodo] = useState('');

    console.log("title", addTodoTitle);
    console.log("todo", addTodo);

    const formHandler = (e) => {
        e.preventDefault()
         
            AddTodoHandler()
        
        setAddTodo('')
        setAddTodoTitle('')
    }
    const AddTodoHandler = async () => {
        console.log("add");
        try {

            const response = await fetch(`${import.meta.env.VITE_POST_URL}`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    userId: userId,
                    title: addTodoTitle,
                    todo: addTodo
                })
            })
            const res = await response.json()
            console.log("res", res);
            setChange((e) => !e)
            
        } catch (error) {
            console.error("error adding todo", error);
        }
    }

    

    return (
        <form method='post' onSubmit={formHandler} className="mb-4">
            <input
                type="text"
                value={  addTodoTitle}
                onChange={(e) => setAddTodoTitle(e.target.value)}
                placeholder="Todo Title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <textarea
                value={addTodo}
                onChange={(e) => setAddTodo(e.target.value)}
                placeholder="Todo Description"
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input type='submit'
                value={'Add'}

                className="mt-2 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />


        </form>
    )
}
