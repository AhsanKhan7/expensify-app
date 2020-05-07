import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import AppRouters, { history } from './Routers/appRouters'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { login, logout }  from './actions/auth'
import getVisibleExpense from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouters />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
            store.dispatch(login(user.uid))
            store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })        
    } else {
            store.dispatch(logout())
            renderApp()
            history.push('/')
    }
})

























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
