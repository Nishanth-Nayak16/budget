import React, {useState} from 'react';

import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/Expenses/NewExpense';
const DUMMY = [
  {
    id: 'e1',
    title: 'Paper',
    amount: 5,
    date: new Date(2021, 2, 21)
  },
  {
    id: 'e2',
    title: 'Insurance',
    amount: 2000,
    date: new Date(2021, 3, 12)
  },
  {
    id: 'e3',
    title: 'EMI',
    amount: 200,
    date: new Date(2021, 7, 11)
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 3000,
    date: new Date(2021, 1, 11)
  }
];

function App() {
  const [expense, setExpense] = useState(DUMMY);

  const addExpenseData = (expenseData) => {
    //console.log('App');
    //console.log(expenseData);
    setExpense(prevState => {
      return [expenseData, ...prevState]
    });
  }

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseData} />
      <Expenses expense={expense} />
    </div>
  );
}

export default App;
