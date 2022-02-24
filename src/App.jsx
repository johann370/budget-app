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

  const [amount, setAmount] = useState({
    10: 0,
    20: 0,
    30: 0
  })

  const [categories, setCategories] = useState([
    {
      id: 10,
      title: 'Rent'
    },
    {
      id: 20,
      title: 'Savings'
    },
    {
      id: 30,
      title: 'Food'
    }
  ])

  const deleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
    setExpenses(expenses - amount[id]);
  }

  return (
    <div className='content'>
      <Navbar />
      <div className='flex-row'>
        <Budget expenses={expenses} remainingBudget={remainingBudget} setRemainingBudget={setRemainingBudget} totalBudget={totalBudget} setTotalBudget={setTotalBudget} />
        <Controls categories={categories} setCategories={setCategories} expenses={expenses} setRemainingBudget={setRemainingBudget} totalBudget={totalBudget} setTotalBudget={setTotalBudget} deleteCategory={deleteCategory} amount={amount} setAmount={setAmount} />
      </div>
      <Categories expenses={expenses} setExpenses={setExpenses} categories={categories} deleteCategory={deleteCategory} remainingBudget={remainingBudget} totalBudget={totalBudget} amount={amount} setAmount={setAmount} />
    </div>
  );
}

export default App;
