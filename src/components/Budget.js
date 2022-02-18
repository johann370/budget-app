import React from 'react';

const Budget = ({ remainingBudget, totalBudget }) => {
    return <div className='budget'>
        <div>
            <h1>Total Budget: </h1>
            <h2>${totalBudget}</h2>
        </div>
        <div>
            <h1>Remaining Budget: </h1>
            <h2>${remainingBudget}</h2>
        </div>
    </div>;
};

export default Budget;
