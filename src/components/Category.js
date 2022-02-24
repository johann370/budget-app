import React, { useState } from 'react';

const Category = ({ id, title, expenses, setExpenses, onDelete, remainingBudget, totalBudget, amount, setAmount }) => {
    const [input, setInput] = useState('');

    const updateAmount = (num) => {
        if (num >= 0) {
            var diff = num - amount[id];

            if (expenses + diff < totalBudget) {
                setAmount({ ...amount, [id]: num });
                setExpenses(expenses + diff);
            } else {
                setAmount({ ...amount, [id]: amount[id] + remainingBudget });
                setExpenses(totalBudget);
            }
        } else {
            setExpenses(expenses - amount[id]);
            setAmount({ ...amount, [id]: 0 });
        }
    }

    return <div className='category'>
        <button onClick={() => onDelete(id, amount)} className='delete-btn'>Delete</button>
        <h1>{title}</h1>
        <p>${amount[id]}</p>
        <div>
            <button className='minus' onClick={() => updateAmount(amount[id] - 100)}>--</button>
            <button className='minus' onClick={() => updateAmount(amount[id] - 10)}>-</button>
            <form onSubmit={(e) => {
                e.preventDefault();

                if (input === '' || isNaN(input)) {
                    return;
                } else if (input < 0) {
                    return;
                } else {
                    updateAmount(input);
                }
            }}>
                <input type='number' inputMode='numeric' value={input} onChange={(e) => setInput(parseInt(e.target.value, 10))} />
            </form>
            <button className='plus' onClick={() => updateAmount(amount[id] + 10)}>+</button>
            <button className='plus' onClick={() => updateAmount(amount[id] + 100)}>++</button>
        </div>
    </div >;
};

export default Category;
