

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: []
}

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo:(state,action)=>{
        state.todos.push({...action.payload, isCompleted: false})
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo } = TodoSlice.actions

export default TodoSlice.reducer