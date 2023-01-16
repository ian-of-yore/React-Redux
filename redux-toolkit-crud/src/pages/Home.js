import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex justify-center items-center mt-40'>
            <div className='w-9/12 mx-auto md:w-1/2 md:mx-auto'>
                <h1 className='font-mono text-3xl font-semibold'>Don't Know What To Do?</h1>
                <h1 className='my-4 font-serif text-2xl'>Make a list of your tasks and complete them one by one.</h1>
                <Link to='/addTask'><button className='btn btn-outline w-1/2 mx-auto'>Fire Away</button></Link>
            </div>
        </div>

    );
};

export default Home;