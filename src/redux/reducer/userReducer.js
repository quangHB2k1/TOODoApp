const initalState ={
    login:false, 
    todoList :[]
}
const useReducer =(state = initalState, action)=>{
     switch(action.type){
        case "SET_ USER":
            return {
                ...state , 
                login :true, 
                todoList:action.payload
            }
            case "ADD_TODO":
                return {
                    ...state, 
                    todoList: [...state.todoList, action.payload]
                }
                case "DELETE_TODO":
                    return {
                        ...state,
                        todoList: state.todoList.filter(todo => todo.id !== action.payload)
                    };
            default:
                return state;
            
     }
}
export default useReducer