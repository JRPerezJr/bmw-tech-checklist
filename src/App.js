import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import './App.css';
import { Typography } from '@material-ui/core';


function Todo({ todo, index, completeTodo, removeTodo }) {
  return <Grid container direction="column" justify="flex-start" alignItems="flex-start">
            <Paper>
              <div
                style={{textDecoration: todo.isCompleted ? 'line-through red' : ''}}
                className="todo"
              >
              { todo.text }
              <div>
                <Button variant="outlined" color="primary"
                  onClick={() => completeTodo(index)}
                >
                Complete
                </Button>
                <Button variant="outlined" color="secondary"
                  onClick={() => removeTodo(index)}
                >
                X
                </Button>
              </div>
              </div>
            </Paper>
          </Grid>
}
function TodoForm({addTodo}) {
   const [value, setValue] = useState('');

   const handleSubmit = e => {
     e.preventDefault();
     if(!value) return;
     addTodo(value);
     setValue('');
   }
   return (
    <Grid container direction="column" justify="flex-start" alignItems="flex-start">
      <Paper>
          <form onSubmit={handleSubmit}>
            <TextField id="outlined-name" label="Add Item" type="text" className="input" placeholder="Add to list" value={value} onChange={e => setValue (e.target.value)} margin="normal" variant="outlined" />
          </form>
      </Paper>
    </Grid>
   )
 }
 

function App() {

  const [todos, setTodos] = useState([
    {
      text: 'Verify the lift area is clear of objects and people',
      isCompleted: false
    },
    {
      text: 'Drive vehicle on to lift',
      isCompleted: false
    },
    {
      text: 'Perform walk around inspection',
      isCompleted: false
    },
    {
      text: 'Verify vehicle in-service date',
      isCompleted: false
    },
    {
      text: 'Check vehicle title status',
      isCompleted: false
    },
    {
      text: 'Verify vehicle is not reported as stolen',
      isCompleted: false
    },
    {
      text: 'Check for open campaigns',
      isCompleted: false
    },
    {
      text: 'Connect ICOM and perform vehicle test',
      isCompleted: false
    },
    {
      text: 'Open hood and perform visual inspection',
      isCompleted: false
    },
    {
      text: 'Read results of the vehicle test',
      isCompleted: false
    },
    {
      text: 'Determine if vehicle repairs will be covered under new or extended warranty',
      isCompleted: false
    },
    {
      text: 'Determine if vehicle repairs will be covered under the emissions warranty',
      isCompleted: false
    },
    {
      text: 'Continue with Test Plans if available',
      isCompleted: false
    },
    {
      text: 'Send request to the parts counter and verify parts availability',
      isCompleted: false
    },
    {
      text: 'Compile list of repairs with labor times and parts',
      isCompleted: false
    },
    {
      text: 'Report back results of recommended repairs to Service Advisor',
      isCompleted: false
    },
    {
      text: 'Park vehicle if parking is available',
      isCompleted: false
    },
    {
      text: 'Wait for authorization from Service Writer',
      isCompleted: false
    },
    {
      text: 'Drive in the next vehicle to repeat todo list',
      isCompleted: false
    }

  ]);

  const addTodo =text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="background-page">
      <div className="todo-list">
        <NavBar/>
        <Typography variant="p">
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
        </Typography>
      </div>
    </div>
  );
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;