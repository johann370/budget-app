import React, { useState } from 'react';
import './App.css';
import Budget from './components/Budget';
import Categories from './components/Categories';

function App() {
  const [expenses, setExpenses] = useState(0);
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: 'Rent'
    },
    {
      id: 2,
      title: 'Savings'
    },
    {
      id: 3,
      title: 'Food'
    }
  ])

  const deleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  }

  return (
    <div>
      <Budget expenses={expenses} />
      <Categories expenses={expenses} setExpenses={setExpenses} categories={categories} deleteCategory={deleteCategory} />
    </div>
  );
}

export default App;
