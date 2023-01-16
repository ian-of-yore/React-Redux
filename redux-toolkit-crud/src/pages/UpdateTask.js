import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateTask } from '../features/TasksSlice';

const UpdateTask = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const prevTitle = location.state.task;

    const dispatch = useDispatch();

    const handleUpdateTask = (event) => {
        event.preventDefault();
        const updatedTitile = event.target.updatedTask.value;
        dispatch(updateTask({ prevTitle, updatedTitile }));
        toast.success('Task has been Updated!')
        navigate('/myTasks', { replace: true })

    }

    return (
        <div className='mt-10 w-11/12 mx-auto md:w-1/2 md:mx-auto'>
            <form onSubmit={handleUpdateTask}>
                <label className="label font-mono font-semibold"><span className="label-text">Edit the task</span></label>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                    <input type="text" placeholder={prevTitle} name='updatedTask' className="input input-bordered w-full md:col-span-3 lg:col-span-4" required />
                    <button type="submit" className='btn btn-outline w-full md:col-span-2 lg:col-span-1'>Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;