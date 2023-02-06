import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./redusSlice";

const rootReducer = combineReducers({
 
    one: todoSlice.reducer,
  
})

const store = configureStore({
    reducer:rootReducer
  })

  export type RootState = ReturnType<typeof store.getState>

export default store

// export const store = configureStore({
//     reducer: rootReducer
// })