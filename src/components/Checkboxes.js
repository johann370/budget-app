import React, { useState, useEffect } from 'react'
import CheckBox from './CheckBox'

const Checkboxes = ({ categories, setCategories, deleteCategory, amount, setAmount }) => {

    const [checkboxes, setCheckboxes] = useState([
        {
            id: 1,
            name: 'Entertainment'
        },
        {
            id: 2,
            name: 'PC'
        },
        {
            id: 3,
            name: 'test'
        }
    ]);


    return (
        <div>
            {checkboxes.map((checkbox) => {
                return <CheckBox key={checkbox.id} id={checkbox.id} name={checkbox.name} categories={categories} setCategories={setCategories} deleteCategory={deleteCategory} amount={amount} setAmount={setAmount} />
            })}
        </div>
    )
}

export default Checkboxes