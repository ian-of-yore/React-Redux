import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddTask from "../pages/AddTask";
import Error from "../pages/Error";
import Home from "../pages/Home";
import MyTasks from "../pages/MyTasks";
import UpdateTask from "../pages/UpdateTask";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addTask',
                element: <AddTask></AddTask>
            },
            {
                path: '/myTasks',
                element: <MyTasks></MyTasks>
            },
            {
                path: '/updateTask',
                element: <UpdateTask></UpdateTask>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])