import React, { useState } from 'react';
import './App.css';
import Budget from './components/Budget';
import Categories from './components/Categories';

function App() {
  const [expenses, setExpenses] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(totalBudget - expenses);
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

  const deleteCategory = (id, amount) => {
    setCategories(categories.filter((category) => category.id !== id));
    setExpenses(expenses - amount);
  }

  return (
    <div>
      <Budget expenses={expenses} remainingBudget={remainingBudget} setRemainingBudget={setRemainingBudget} totalBudget={totalBudget} setTotalBudget={setTotalBudget} />
      <Categories expenses={expenses} setExpenses={setExpenses} categories={categories} deleteCategory={deleteCategory} remainingBudget={remainingBudget} totalBudget={totalBudget} />
    </div>
  );
}

export default App;
