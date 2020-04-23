import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import AppRouters from './Routers/appRouters'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter }  from './actions/filters'
import getVisibleExpense from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();


store.dispatch(addExpense({ description: 'water bill', amount:200 }))
store.dispatch(addExpense({ description: 'gas bill', createdAt:1000 }))
store.dispatch(addExpense({ description: 'Rent', amount:2000 }))

// store.dispatch(setTextFilter('water'))


const state = store.getState()
const visibleExpenses = getVisibleExpense(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouters />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))































// class OldSyntax {
//     constructor() {
//     this.name = "Ahsan"
//     this.Greeting = this.Greeting.bind(this)
//     }
//     Greeting() {
//         return `Hi your name is ${this.name}`
//     }
// }
// const oldSyntax = new OldSyntax();
// const Greetingnew = oldSyntax.Greeting()
// console.log(Greetingnew)


// // -----------------


// class NewSyntax {
//     name = "Ali"
//     getGreeting = () => {
//         return `Hi your name is ${this.name}`
//     }
// }
// const newSyntax = new NewSyntax()
// const newGreeting = newSyntax.getGreeting()
// console.log(newGreeting)

// new syntax is work and look simple by installing and using babel plugin named  "transform-class-properties"
