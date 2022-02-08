import React, { useState } from 'react';

const Category = ({ title }) => {
    const [amount, setAmount] = useState(0);
    const [input, setInput] = useState();
    return <div className='category'>
        <h1>{title}</h1>
        <p>${amount}</p>
        <div>
            <button className='minus'>--</button>
            <button className='minus'>-</button>
            <form onSubmit={(e) => {
                e.preventDefault();
                setAmount(input);
            }}>
                <input type='number' inputMode='numeric' value={input} onChange={(e) => setInput(e.target.value)} />
            </form>
            <button className='plus'>+</button>
            <button className='plus'>++</button>
        </div>
    </div >;
};

export default Category;
