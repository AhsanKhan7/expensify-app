import React from 'react'
import ExpenseList from './expensesList'
import ExpenseListFilters from './ExpenseListFilters'

const dashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default dashboardPage