import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import dashboardPage from '../components/Dashboard'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/Edit'
import help from '../components/Help'
import NotFound from '../components/NotFound'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute' 

export const history = createHistory()

const AppRouters = () => (
    <Router history={history}>
        <div>
                <Switch> 
                    <Route path="/" component={LoginPage} exact={true} />
                    <PrivateRoute path="/dashboard" component={dashboardPage} />
                    <PrivateRoute path="/Add" component={AddExpensePage} />
                    <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                    <Route path="/help" component={help} />
                    <Route component={NotFound} />
                </Switch>
        </div>
    </Router>
)

export default AppRouters