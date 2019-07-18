import React, {useContext} from 'react';
import AppContext from '../AppContext';
function TodoListItem({todo,onChangeTodo, onRemoveTodo}){
    
    return (
        <div style={{textDecoration: todo.done ? "line-through" : " "}}>
            <input type="checkbox" 
            checked={todo.done}
            onChange={onChangeTodo}
            />
            <span> {todo.text}</span>
            <button className="remove" onClick={onRemoveTodo}>Remove</button>
        </div>
    );
}

function Todolist({todos , toggleTodo, removeItem, checkItem}){
    
    return (
      <ul className="list-todo">
          {todos.map((todo , index) => 
                <li key={todo.text}>
                    <TodoListItem 
                    todo={todo} 
                    onChangeTodo={()=> toggleTodo(index) }
                    key={todo.text}
                    onRemoveTodo={ () => removeItem()}
                    />
                </li>
            )}
            
      </ul>
    )
  
}

export default Todolist;