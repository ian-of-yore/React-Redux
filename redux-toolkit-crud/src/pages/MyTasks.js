import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import { deleteTask } from '../features/TasksSlice';

const MyTasks = () => {
    const tasks = useSelector((state) => state.taskReducer.tasks);
    const dispatch = useDispatch();

    const handleTaskDelete = (taskTitile) => {
        // console.log(taskTitile)
        dispatch(deleteTask(taskTitile));
        toast.success('Task has been marked as completed')
    }

    return (
        <div className='mt-10 w-11/12 mx-auto md:w-1/2 md:mx-auto'>
            <div className="overflow-x-auto">
                {
                    tasks.length &&
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Task</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((task, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{task.title}</td>
                                    <td className='flex justify-start'>
                                        <Link to='/updateTask' state={{ task: task.title }}><button className='btn btn-xs'>Update</button></Link>
                                        <button onClick={() => handleTaskDelete(task.title)} className='btn btn-xs mx-3'>Completed</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                }
                {
                    tasks.length === 0 && <div>Yaaayy You've completed all the tasks!</div>
                }
            </div>
            <Modal></Modal>
        </div>
    );
};

export default MyTasks;