const initalState ={
    email : "", 
    userName:"" , 
    login:false, 
    todoList :[]
}
const useReducer =(state = initalState, action)=>{
     switch(action.type){
        case "SET_ USER":
            return {
                ...state , 
                login :true, 
                email: action.payload.email ,  
                userName:action.payload.userName,
                 
                todoList:action.payload.todoList
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
                    case "SET_LOGOUT" :
                        return{
                            ...initalState
                        }
            default:
                return state;
            
     }
}
export default useReducer