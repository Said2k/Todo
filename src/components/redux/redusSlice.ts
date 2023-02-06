import {createSlice} from '@reduxjs/toolkit'

export interface CounterState {
    todos: any
    oneTodo: any
  }
  
  const initialState: CounterState = {
    todos: [],
    oneTodo: {},
  }
  
  export  const  todoSlice  = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    addTodo(state,action){
      
        state.todos = action.payload

     },
     getOneTodo(state,action){
      state.oneTodo = action.payload
     }
  
    },
  })


  export default todoSlice.reducer
  export const {addTodo,getOneTodo} = todoSlice.actions