import './App.css';
import React, { useState } from 'react';
import Budget from './components/Budget';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Controls from './components/Controls';

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
      <div className='flex-row'>
        <Budget expenses={expenses} remainingBudget={remainingBudget} setRemainingBudget={setRemainingBudget} totalBudget={totalBudget} setTotalBudget={setTotalBudget} />
        <Controls categories={categories} setCategories={setCategories} expenses={expenses} setRemainingBudget={setRemainingBudget} totalBudget={totalBudget} setTotalBudget={setTotalBudget} />
      </div>
      <Categories expenses={expenses} setExpenses={setExpenses} categories={categories} deleteCategory={deleteCategory} remainingBudget={remainingBudget} totalBudget={totalBudget} />
    </div>
  );
}

export default App;
