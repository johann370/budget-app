import React, { useState } from 'react';
import './App.css';
import Budget from './components/Budget';
import Categories from './components/Categories';

function App() {
  const [expenses, setExpenses] = useState(0);
  return (
    <div>
      <Budget expenses={expenses} />
      <Categories expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
}

export default App;
