import React, { useState, useEffect } from 'react'

const CheckBox = ({ id, name, categories, setCategories, deleteCategory, amount, setAmount }) => {

    const [checked, setChecked] = useState(true);

    useEffect(() => {
        if (checked) {
            setCategories(categories => ([...categories, { id: id, title: name }]));
            setAmount(amount => ({ ...amount, [id]: 0 }));
        } else {
            deleteCategory(id);
        }
    }, [checked])

    const onChange = () => {
        setChecked(!checked);
    }

    return (
        <div className='checkbox'>
            <input onChange={onChange} checked={checked} type='checkbox' id={name} name={name} value={name} />
            <label htmlFor={name}>{name}</label>
        </div>
    )
}

export default CheckBox