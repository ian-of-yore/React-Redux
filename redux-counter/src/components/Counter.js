import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterActions';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleIncrementCounter = () => {
        dispatch(incrementCounter())
    }

    const handleDecrementCounter = () => {
        dispatch(decrementCounter())
    }

    const handleResetCounter = () => {
        dispatch(resetCounter())
    }

    return (
        <div>
            <h1>Counter</h1>
            <h2>Value: {count}</h2>
            <button onClick={handleIncrementCounter}>Increment</button>
            <button onClick={handleDecrementCounter}>Decrement</button>
            <button onClick={handleResetCounter}>Reset</button>
        </div>
    );
};

export default Counter;