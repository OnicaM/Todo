import React, { useState, useEffect, useReducer } from 'react';
import Form from './component/Form';
import Todolist from './component/Todolist';
import Filter from './component/Filter';
import './App.css';
import useTodoWithFilter from './useTodos';
import AppContext from './AppContext';
import TodoList from './component/Todolist';
import useTodosReducer from './component/useTodosReducer';


function App() {
 const { 
    // addTodo,
    setActiveFilter,
    todos,
    activeFilter,
    todosToDisplay,
    removeItem,
    toggleTodo,
    setTodos
 } = useTodoWithFilter();
  
 // const [state, dispatch] = useReducer(useTodosReducer, 'defaultState');
 // const testAction = {type:'test'};


  return (
    // <AppContext.Provider value={{state, dispatch}}>
      <div className="todo-app">
        <Form setTodos={setTodos} todos={todos} />
        
          <Filter setActiveFilter={setActiveFilter} />
          
      
      {todos[0] ? (
        <p>
          Showing {activeFilter} ({todosToDisplay.length}:{""})
        </p>
      ) : null}
        <TodoList todos={todos} removeItem={removeItem} toggleTodo={toggleTodo}/>
        </div>

      //// </AppContext.Provider>

      
  );
}

export default App;
