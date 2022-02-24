import React from 'react';
import Category from './Category'

const Categories = ({ expenses, setExpenses, categories, deleteCategory, remainingBudget, totalBudget, amount, setAmount }) => {
    return <div className='categories'>
        {
            categories.map((category) => {
                return <Category key={category.id} id={category.id} title={category.title} expenses={expenses} setExpenses={setExpenses} onDelete={deleteCategory} remainingBudget={remainingBudget} totalBudget={totalBudget} amount={amount} setAmount={setAmount} />
            })
        }
    </div>;
};

export default Categories;
