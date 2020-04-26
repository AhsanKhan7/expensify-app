import React from 'react'
import ExpenseList from './expensesList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './expensesSummary'


const dashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default dashboardPage