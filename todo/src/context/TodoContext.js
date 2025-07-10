import { createContext , useContext } from "react";

export const Todocontext = createContext({
    todos:[
        {
            id : 1,
            todo : "Todo Items",
            completed : false
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleTodo : (id)=>{}
})

export const useTodo = ()=> {
    return useContext(Todocontext);
}

export const TodoProvider = Todocontext.Provider