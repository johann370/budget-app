import React from 'react';
import Category from './Category'

const Categories = ({ expenses, setExpenses }) => {
    var categories = [
        {
            'id': 1,
            'title': 'Rent'
        },
        {
            'id': 2,
            'title': 'Savings'
        },
        {
            'id': 3,
            'title': 'Food'
        }
    ]
    return <div>
        {
            categories.map((category) => {
                return <Category key={category.id} title={category.title} expenses={expenses} setExpenses={setExpenses} />
            })
        }
    </div>;
};

export default Categories;
