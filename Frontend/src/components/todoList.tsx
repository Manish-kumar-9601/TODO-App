import React, { useState } from 'react'

import { DeleteTodo } from './deleteTodo';
import TodoEditInput from './todoEditInput';

export const TodoList = ({ todos, setChange }) => {
    const [editingTodoId, setEditingTodoId] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    return (
        <ul className="space-y-4">
            {todos.map((todo, index) => (
                <li key={index} className="flex flex-col bg-gray-200 p-2 rounded-md shadow-sm text-black">
                    {editingTodoId === todo._id ? (
                        <TodoEditInput currentTodo={todo.todo} currentTodoId={todo._id} currentTodoTitle={todo.title}  />
                    ) : (
                        <>
                            <h3 className="font-bold">{todo.todoTitle}</h3>
                            <p>{todo.todo}</p>
                        </>
                    )}
                    <div className="flex space-x-2 mt-2">
                        {editingTodoId !==todo._id ?  
                        <>
                        <button
                            onClick={() => [setIsEditing((e) => !e),  setEditingTodoId(todo._id) ]}
                            className="py-1 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                            Edit
                        </button>
                        <DeleteTodo TodoId={todo._id} setChange={setChange} />
                            </> :
                            <br />
                        }
                    </div>
                </li>
            ))}
        </ul>
    )
}

