import React from 'react';

import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

const ExpenseList = props => {
    if(props.item.length === 0) {
        return <h2 className="expenses-list__fallback">Found no Expenses</h2>
    }
    return (
        <ul className='expenses-list'>
            {props.item.map(item => (<ExpenseItem 
                key={item.id}
                title={item.title}
                amount= {'Rs.' + item.amount}
                date={item.date}></ExpenseItem>
            ))}
        </ul>
    );
};

export default ExpenseList;