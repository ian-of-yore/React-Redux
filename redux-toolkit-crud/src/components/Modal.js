import React from 'react';

const Modal = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <form>
                    <div className='flex flex-col bg-gray-900 border-3 p-8'>
                        <h3 className='font-mono font-semibold text-xl text-white mb-4'>Update the task title</h3>
                        <input type="text" placeholder="Task" name='task' className="input input-bordered w-full" />
                        <button type="submit" className='btn btn-sm mt-3 w-full'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;