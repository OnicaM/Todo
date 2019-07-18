

function todosReducer(state, action){
     
    if(action.type =='test'){
        return 'hello';
    }
    return state;
}

export default todosReducer;
