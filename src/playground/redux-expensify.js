import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'


// ADD-EXPENCE
export const addExpenses = ({ description='', note='', amount=0, createAt=0 } ={}) => ({
    type: 'ADD-EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
})
// REMOVE-EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE-EXPENSE',
    id,
})
// EDIT-EXPENSE
export const editExpense = (id, update) => ({
    type: "EDIT-EXPENSE",
    id,
    update
})

// SET-TEXT-FILTER
const setTextFilter = (text = '') => ({
    type: 'SET-TEXT-FILTER',
    text
})

// SORT-BY-AMOUNT
const sortByAmount = () => ({
    type: 'SORT-BY-AMOUNT'
})

// SORT-BY-DATE
const setByDate = () => ({
    type: 'SORT-BY-DATE'
})

// SET-START-DATE
const setStartDate = (startDate) => ({
    type: 'SET-START-DATE',
    startDate
})

// SET-END-DATE
const setEndDate = (endDate) => ({
    type: 'SET-END-DATE',
    endDate
})

//Expenses Reducer

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD-EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE-EXPENSE':
            return state.filter(({id}) => id !== action.id)
        case 'EDIT-EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}

const filterReducerDefaultState = {text:'', sortBy:'date', startDate:undefined, endDate:undefined}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET-TEXT-FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT-BY-AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT-BY-DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET-START-DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET-END-DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

//visible expense
const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate

        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate
        
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return  startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1: -1
        }
    })
}


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
}))

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpense(state.expenses, state.filters)
    console.log(visibleExpenses)    
})

const expenseOne = store.dispatch(addExpenses({ description: 'RENT', amount:100, createAt:-1000}))
const expenseTwo = store.dispatch(addExpenses({ description: 'rent', amount:300, createAt:-1000}))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount:500 }))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())

// store.dispatch(setEndDate(1250))

const demoData = {
    expense: [{
        id:'qwerty',
        description:'january Rent',
        note: 'this is final payment',
        amount: 45500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',   //amount or date
        startDate: undefined,
        endDate: undefined
    }
}

// const state = {
//     name: 'mike',
//     age: 20
// }

// console.log({
//     ...state,
//     location: 'kajaj',
//     age: 33
// })

