import React, { useState } from 'react';
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through red' : '' }}
      className='todo'
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
}
function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        placeholder='Add to the list'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function Form() {
  const [todos, setTodos] = useState([
    {
      text: 'Verify the lift area is clear of objects and people',
      isCompleted: false,
    },
    {
      text: 'Drive vehicle on to lift',
      isCompleted: false,
    },
    {
      text: 'Perform walk around inspection',
      isCompleted: false,
    },
    {
      text: 'Verify vehicle in-service date',
      isCompleted: false,
    },
    {
      text: 'Check vehicle title status',
      isCompleted: false,
    },
    {
      text: 'Verify vehicle is not reported as stolen',
      isCompleted: false,
    },
    {
      text: 'Check for open campaigns',
      isCompleted: false,
    },
    {
      text: 'Connect ICOM and perform vehicle test',
      isCompleted: false,
    },
    {
      text: 'Open hood and perform visual inspection',
      isCompleted: false,
    },
    {
      text: 'Read results of the vehicle test',
      isCompleted: false,
    },
    {
      text:
        'Determine if vehicle repairs will be covered under new vehicle warranty',
      isCompleted: false,
    },
    {
      text:
        'Determine if vehicle repairs will be covered under extended warranty',
      isCompleted: false,
    },
    {
      text:
        'Determine if vehicle repairs will be covered under emissions warranty',
      isCompleted: false,
    },
    {
      text: 'Continue with Test Plans if available',
      isCompleted: false,
    },
    {
      text: 'Send request to the parts counter and verify parts availability',
      isCompleted: false,
    },
    {
      text: 'Compile list of repairs with labor times and parts',
      isCompleted: false,
    },
    {
      text: 'Report back results of recommended repairs to Service Advisor',
      isCompleted: false,
    },
    {
      text: 'Park vehicle if parking is available',
      isCompleted: false,
    },
    {
      text: 'Wait for authorization from Service Writer',
      isCompleted: false,
    },
    {
      text: 'Drive in the next vehicle to repeat todo list',
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='todo-list'>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default Form;
