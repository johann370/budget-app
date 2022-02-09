import React, { useEffect, useState } from 'react';

const Budget = ({ expenses, remainingBudget, setRemainingBudget, totalBudget, setTotalBudget }) => {
    const [input, setInput] = useState('');

    useEffect(() => {
        setRemainingBudget(totalBudget - expenses);
    }, [totalBudget, expenses]);

    return <div className='budget'>
        <form onSubmit={(e) => {
            e.preventDefault();
            if (input === '' || isNaN(input)) {
                return;
            } else if (input < 0) {
                return;
            } else {
                setTotalBudget(input);
            }
        }}>
            <input value={input} type='number' placeholder='Enter budget' onChange={(e) => setInput(parseInt(e.target.value))} />
        </form>
        <h1>Total Budget: </h1>
        <h2>${totalBudget}</h2>
        <h1>Remaining Budget: </h1>
        <h2>${remainingBudget}</h2>
    </div>;
};

export default Budget;
