import React, { useState } from 'react';
import Category from './Category'

const Categories = ({ expenses, setExpenses, categories, deleteCategory }) => {
    return <div>
        {
            categories.map((category) => {
                return <Category key={category.id} id={category.id} title={category.title} expenses={expenses} setExpenses={setExpenses} onDelete={deleteCategory} />
            })
        }
    </div>;
};

export default Categories;
