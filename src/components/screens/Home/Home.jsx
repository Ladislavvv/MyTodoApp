import React from 'react';
import ToDoItem from './item/ToDoItem';
import CreateTodoField from './create-todo-filed/CreateTodoField';

const data = [
  {
    id: 'gqwgw',
    title: 'Finish the essay collaboration',
    isCompleted: false,
  },
  {
    id: 'kowkevw',
    title: 'Read the book',
    isCompleted: false,
  },
  {
    id: '34gSG',
    title: 'Buy coca-cola',
    isCompleted: false,
  },
];

const Home = () => {
  function saveToLocalStorage(key, data) {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      console.error('Ошибка при сохранении данных в localStorage:', error);
    }
  }

  function loadFromLocalStorage(key) {
    try {
      const serializedData = localStorage.getItem(key);
      if (serializedData === null) {
        return undefined; // или любое другое значение по умолчанию
      }
      return JSON.parse(serializedData);
    } catch (error) {
      console.error('Ошибка при извлечении данных из localStorage:', error);
      return undefined; // или любое другое значение по умолчанию
    }
  }

  const [todos, SetTodos] = React.useState(() => {
    const storedTodos = loadFromLocalStorage('todos');
    return storedTodos ? storedTodos : [];
  });

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    SetTodos(copy);
  };

  const removeTodo = (id) => {
    SetTodos([...todos].filter((t) => t.id !== id));
  };

  React.useEffect(() => {
    saveToLocalStorage('todos', todos);
  }, [todos]);

  return (
    <div className="text-white w-4/5 mx-auto max-w-2xl">
      <h1 className=" text-2xl font-bold text-center mb-8">My ToDo </h1>
        <CreateTodoField SetTodos={SetTodos}></CreateTodoField>
      <div className='max-h-96 overflow-y-auto scroll-w-0'>

      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
      ))}
      </div>

    </div>
  );
};

export default Home;
