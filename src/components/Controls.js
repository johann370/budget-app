import React, { useState, useEffect } from 'react'
import CreateCategory from './CreateCategory'

const Controls = ({ categories, setCategories, expenses, setRemainingBudget, totalBudget, setTotalBudget }) => {
    const [input, setInput] = useState('');

    useEffect(() => {
        setRemainingBudget(totalBudget - expenses);
    }, [totalBudget, expenses]);

    return (
        <div className='controls'>
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
                <label>Enter Budget:</label>
                <input value={input} type='number' onChange={(e) => setInput(parseInt(e.target.value))} />
            </form>
            <CreateCategory categories={categories} setCategories={setCategories} />
        </div>
    )
}

export default Controls