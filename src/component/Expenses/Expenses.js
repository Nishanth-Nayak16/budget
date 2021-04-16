import React, {useState} from 'react';

//import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const newExpense = props.expense.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter select={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={newExpense} />
            <ExpenseList item={newExpense} />
        </Card>
    );
}

export default Expenses;