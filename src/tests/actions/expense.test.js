import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addExpense, removeExpense, editExpense, startAddExpense } from '../../actions/expenses'
import expenses from '../fixtures/expense'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

test('should remove run', () => {
    const action = removeExpense({ id: '123' })
    expect(action).toEqual({
        type: 'REMOVE-EXPENSE',
        id: '123'
    })
})

test('should edit run', () => {
    const action = editExpense('123', { note: 'something' })
    expect(action).toEqual({
        type: 'EDIT-EXPENSE',
        id: '123',
        updates: {note: 'something'}
    }) 
})

test('should add expense run with provided values'), () => {
  const action = addExpense(expenses[2])
  expect(action).toEqual({
      type: 'ADD-EXPENSE',
      expense: expenses[2]
  })
}

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'mouse',
        amount: 300,
        note: 'this one is good',
        createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD-EXPENSE',
            expense: {
            id: expect.any(String),
            ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
            }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData)
            done()
    })
})

test('should add expense to database and store with default value', (done) => {
    const store = createMockStore({})
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD-EXPENSE',
            expense: {
            id: expect.any(String),
            ...expenseDefaults
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
            }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults)
            done()
    })
})
// test('should test run by default value'), () => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD-EXPENSE',
//         expense: {description: '',
//         id: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     }})
// }

