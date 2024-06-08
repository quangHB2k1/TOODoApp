export const setUser = (todo)=>({
    type: 'SET_ USER',
    payload:todo
})

export const setLogout =()=>({
    type :"SET_LOGOUT"
})


export const addTodo = (todo) => ({
    type: "ADD_TODO",
    payload: todo
});

export const delTodo =(id)=>({
    type:"DELETE_TODO",
    payload :id
})