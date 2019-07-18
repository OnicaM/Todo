import {useState, useEffect} from 'react';
import {ALL, DONE, TODO} from './filters';

function useTodosWithFilter(){

const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [activeFilter, setActiveFilter] = useState(ALL);

  useEffect(() => {localStorage.setItem('todos',JSON.stringify(todos))},[todos])

  function filterTodos(filter){
    switch (filter){
      case DONE:
        return todos.filter(t => t.done === true);
      case TODO: 
        return todos.filter(t => t.done === false);
      default:
        return todos;
    }
    
  }
   
  function toggleTodo(index){
     const ourTodo = [...todos];
     if(ourTodo[index].done){
      ourTodo[index].done = false;
      setTodos(ourTodo);
     }else{
      ourTodo[index].done = true;
      setTodos(ourTodo);
     }
     
  }
  function removeItem(index) {
    const arrayTodos = [...todos];
    arrayTodos.splice(todos[index], 1);
    setTodos(arrayTodos);
  }
  function checkItem(index){
    const arrayTodos = [...todos];
    if(arrayTodos[index].done === true ){
      arrayTodos[index].done = false;
    }else{
      arrayTodos[index].done = true;
    }
  }
function displayCompleted(){
  const arrayTodos = [...todos];
  console.log(arrayTodos);
  
}
displayCompleted();

const todosToDisplay = filterTodos(activeFilter);

    return {
        todosToDisplay,
        // addTodo,
        toggleTodo,
        removeItem,
        setActiveFilter,
        todos,
        setTodos
    }
}

export default useTodosWithFilter;