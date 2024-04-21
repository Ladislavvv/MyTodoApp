import React from 'react';

const CreateTodoField = ({ SetTodos }) => {
  const [title, SetTitle] = React.useState('');

  const addTodo = (title) => {
    if (!title) return;
    SetTodos(prev => [
      {
        id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    SetTitle('')
  };

  return (
    <div
      className="flex items-center justify-between mb-4 rounded-2xl 
     border-zinc-800 border-2 px-4 py-3 w-full mb-20">
      <input
        onChange={(e) => SetTitle(e.target.value)}
        type="text"
        value={title}
        onKeyPress={(e) => e.key === 'Enter' && addTodo(title)}
        className=" bg-transparent w-full border-none outline-none"
        placeholder="Add a task"
      />
    </div>
  );
};

export default CreateTodoField;
