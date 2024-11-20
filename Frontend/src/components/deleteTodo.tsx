import React from 'react'

export const DeleteTodo = ({ TodoId,setChange }) => {
    if(!TodoId)return <p className='text-red-600'>todo id not found </p>
    const handleDelete = async (e) => {
        console.log("todoId",TodoId);
        e.preventDefault();
        console.log("url:", import.meta.env.VITE_SIGNUP_URL);
        const response = await fetch(import.meta.env.VITE_DELETE_URL, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            
            body: JSON.stringify({
                todoId:TodoId
            })
        })
        setChange((e)=>!e)

    }

    return (
        <button
            onClick={handleDelete}
            className="py-1 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
            Delete
        </button>
    )
}

