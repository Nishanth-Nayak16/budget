import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isAddButton, setIsAddButton] = useState(false);

    const saveExpenseData = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        };
        props.onAddExpenseData(expenseData);
        setIsAddButton(false);
    }

    const onClickedAddHandler = () => {
        setIsAddButton(true);
    }

    const onClickedCancelHandler = () => {
        setIsAddButton(false);
    }
    return (
        <div className="new-expense">
            {!isAddButton && <button onClick={onClickedAddHandler}>Add New Expense</button>}
            {isAddButton && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={onClickedCancelHandler} />} 
        </div>
    );
};

export default NewExpense;