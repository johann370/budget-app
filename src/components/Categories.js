import React from 'react';
import Category from './Category'

const Categories = ({ expenses, setExpenses, categories, deleteCategory, remainingBudget, totalBudget }) => {
    return <div className='categories'>
        {
            categories.map((category) => {
                return <Category key={category.id} id={category.id} title={category.title} expenses={expenses} setExpenses={setExpenses} onDelete={deleteCategory} remainingBudget={remainingBudget} totalBudget={totalBudget} />
            })
        }
    </div>;
};

export default Categories;
