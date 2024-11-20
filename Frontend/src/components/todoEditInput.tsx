import React, { useState } from 'react'

export default function TodoEditInput({currentTodo,currentTodoId,currentTodoTitle}) {
    const [todoTitle,setTodoTitle]=useState(currentTodoTitle)
    const [todo,setTodo]=useState(currentTodo)
    console.log("newtitle",todoTitle);
    console.log("newtodo",todo);
    const editTodoHandler = async () => {
        console.log("edit");

        try {
            const response = await fetch(`${import.meta.env.VITE_PUT_URL}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    todoId: currentTodoId, newTitle: todoTitle, newTodo:todo
                })
            })
            const res = await response.json()
            console.log("res", res);
        } catch (error) {
            console.log(
                error
            );
        }
    }
  return (
    <form  onSubmit={editTodoHandler} className="mb-4">
    <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="Todo Title"
        className="w-full px-3 py-2 border text-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <textarea
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Todo Description"
        className="w-full mt-2 px-3 py-2 text-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <input type='submit'
        value={'save'}

        className="mt-2 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    />


</form>
  )
}
