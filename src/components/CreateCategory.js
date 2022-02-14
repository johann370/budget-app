import React, { useState } from 'react'

const CreateCategory = ({ categories, setCategories }) => {

    const [input, setInput] = useState('');

    const createCategory = () => {
        if (input !== '') {
            setCategories([...categories, { id: categories.length + 1, title: input }]);
            setInput('');
        }
    }

    return (
        <div>
            <input value={input} type='text' placeholder='Enter category name' onChange={(e) => { setInput(e.target.value) }} />
            <button onClick={createCategory}>Create Category</button>
        </div>
    )
}

export default CreateCategory