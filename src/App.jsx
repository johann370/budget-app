import './App.css';
import React, { useState } from 'react';
import Budget from './components/Budget';
import Categories from './components/Categories';
import CreateCategory from './components/CreateCategory';
import Navbar from './components/Navbar';

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
    <div className='content'>
      <Navbar />
      <Budget expenses={expenses} remainingBudget={remainingBudget} setRemainingBudget={setRemainingBudget} totalBudget={totalBudget} setTotalBudget={setTotalBudget} />
      <CreateCategory categories={categories} setCategories={setCategories} />
      <Categories expenses={expenses} setExpenses={setExpenses} categories={categories} deleteCategory={deleteCategory} remainingBudget={remainingBudget} totalBudget={totalBudget} />
    </div>
  );
}

export default App;
