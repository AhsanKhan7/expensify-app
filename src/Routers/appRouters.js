import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import dashboardPage from '../components/Dashboard'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/Edit'
import help from '../components/Help'
import NotFound from '../components/NotFound'
import ExpensesListItem from '../components/expenseListItem'

const AppRouters = () => (
    <BrowserRouter>
        <div>
            <Header />
                <Switch> 
                    <Route path="/" component={dashboardPage} exact={true}/>
                    <Route path="/Add" component={AddExpensePage}/>
                    <Route path="/edit/:id" component={EditExpensePage}/>
                    <Route path="/help" component={help}/>
                    <Route component={NotFound}/>
                </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouters