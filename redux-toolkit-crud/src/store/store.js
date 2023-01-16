import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/TasksSlice";

const store = configureStore({
    reducer: {
        taskReducer: tasksReducer
    }
})


export default store;