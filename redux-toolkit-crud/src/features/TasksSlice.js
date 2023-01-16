import { createSlice } from "@reduxjs/toolkit";

const initialTasks = {
    tasks: [
        { title: 'LeetCode - Koko Eating Banana' },
        { title: 'LeetCode - Two Sum' },
        { title: 'LeetCode - Inorder Binary Tree' },
    ]
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTasks,
    reducers: {
        showTasks: (state) => {
            return state
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        deleteTask: (state, action) => {
            const title = action.payload;
            state.tasks = state.tasks.filter(task => task.title !== title)
        },
        updateTask: (state, action) =>{
            
        }
    }
})

export const { showTasks, addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;