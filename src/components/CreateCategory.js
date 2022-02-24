import React, { useState } from 'react'

const CreateCategory = ({ categories, setCategories, amount, setAmount }) => {

    const [input, setInput] = useState('');
    const id = categories.length + 1;

    const createCategory = () => {
        if (input !== '') {
            setCategories([...categories, { id: id, title: input }]);
            setInput('');
            setAmount({ ...amount, [id]: 0 });
        }
    }

    return (
        <div className='create-category'>
            <input value={input} type='text' placeholder='Enter category' onChange={(e) => { setInput(e.target.value) }} />
            <button onClick={createCategory}>Create Category</button>
        </div>
    )
}

export default CreateCategory