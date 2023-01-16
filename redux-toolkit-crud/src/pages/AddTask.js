import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../features/TasksSlice';

const AddTask = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const title = event.target.task.value;
        dispatch(addTask({ title }))
        event.target.reset();
        navigate('/myTasks', { replace: true })
        toast.success('Task Added')
    }

    return (
        <div className='mt-10 w-11/12 mx-auto md:w-1/2 md:mx-auto'>
            <form onSubmit={handleOnSubmit}>
                <label className="label font-mono font-semibold"><span className="label-text">Enter the task name</span></label>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                    <input type="text" placeholder="Task" name='task' className="input input-bordered w-full md:col-span-3 lg:col-span-4" required />
                    <button type="submit" className='btn btn-outline w-full md:col-span-2 lg:col-span-1'>Add Task</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;