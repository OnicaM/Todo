import React, { useState } from 'react';

function Form({setTodos, todos}){
    const [todoText, setTodoText] = useState('');
    console.log('TD: ',todos);
    function addTodo(e) {
    e.preventDefault();
      setTodos([
        ...todos,
        {
          text: todoText,
          done: false
        }
      ]);
    setTodoText("");
  }




    // function onInputChange(e){
    //     setTodoText(e.target.value);
    // }
    // function clickHandler(e){
    //     e.preventDefault();
    //     addTodo(todoText);
    //     setTodo('');
    //     inputFiled.current.focus();
    // }
    return (
            <form>
                <input 
                value={todoText} 
                onChange={e => setTodoText(e.target.value)} 
                type="text" /> 
                <input onClick={addTodo} type="submit" value="Add" />
            </form>
        );
}
export default Form;