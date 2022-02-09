import React, { useState } from 'react';

const Category = ({ id, title, expenses, setExpenses, onDelete }) => {
    const [amount, setAmount] = useState(0);
    const [input, setInput] = useState('');
    return <div className='category'>
        <button onClick={() => onDelete(id)} className='delete-btn'>Delete</button>
        <h1>{title}</h1>
        <p>${amount}</p>
        <div>
            <button className='minus'>--</button>
            <button className='minus'>-</button>
            <form onSubmit={(e) => {
                e.preventDefault();

                if (input === '') {
                    return;
                } else {
                    var diff = input - amount;
                    setAmount(input);
                    setExpenses(expenses + diff);
                }
            }}>
                <input type='number' inputMode='numeric' value={input} onChange={(e) => setInput(e.target.value)} />
            </form>
            <button className='plus'>+</button>
            <button className='plus'>++</button>
        </div>
    </div >;
};

export default Category;
