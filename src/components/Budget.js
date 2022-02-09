import React, { useState } from 'react';

const Budget = ({ expenses }) => {
    const [budget, setBudget] = useState(0);
    const [input, setInput] = useState();
    return <div className='budget'>
        <form onSubmit={(e) => {
            e.preventDefault();
            setBudget(input);
        }}>
            <input value={input} type='number' placeholder='Enter budget' onChange={(e) => setInput(e.target.value)} />
        </form>
        <h1>Total Budget: </h1>
        <h2>${budget}</h2>
        <h1>Remaining Budget: </h1>
        <h2>${budget - expenses}</h2>
    </div>;
};

export default Budget;
