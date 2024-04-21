import React from 'react';
import Check from './Check';
import { BsTrash } from 'react-icons/bs';

function ToDoItem({ todo, changeTodo, removeTodo }) {
  return (
    <div className="flex items-center mb-4 rounded-2xl bg-zinc-800 p-4 w-full">
      <button onClick={() => changeTodo(todo.id)} className="flex items-center">
        <Check isCompleted={todo.isCompleted} />
      </button>
      <span className={`${todo.isCompleted ? 'line-through' : ''} max-w-xl`}>{todo.title}</span>
      <button className="ml-auto" onClick={() => removeTodo(todo.id)}>
        <BsTrash
          size={20}
          className="text-gray-600 hover:text-red-500 transition-colors ease-in-out duration-300"></BsTrash>
      </button>
    </div>
  );
}

export default ToDoItem;
