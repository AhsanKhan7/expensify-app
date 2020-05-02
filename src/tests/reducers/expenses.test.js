import ExpensesReducers from '../../reducers/expenses'
import expenses from '../fixtures/expense'
import expense from '../fixtures/expense'

test('should it work', () => {
    const state = ExpensesReducers(undefined, {type: '@@init'})
    expect(state).toEqual([])
})

test('should remove expense', () => {
    const action = {
        type: 'REMOVE-EXPENSE',
        id: expenses[1].id
    }
    const state = ExpensesReducers(expenses, action)
    expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE-EXPENSE',
        id: '-1'
    }
    const state = ExpensesReducers(expenses, action)
    expect(state).toEqual(expenses)
})

test('should an add expense', () => {
    const expense = {
        id: '33',
        description: 'laptop',
        note: '',
        amount: 95,
        createdAt: 0
    }
    const action = { type: 'ADD-EXPENSE',
                        expense }
    const state = ExpensesReducers(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit expense run', () => {
    const amount = 122000
    const action = {
        type: 'EDIT-EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = ExpensesReducers(expenses, action)
    expect(state[1].amount).toBe(amount)
})

test('should  not edit expense if not found', () => {
    const amount = 122000
    const action = {
        type: 'EDIT-EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
    const state = ExpensesReducers(expenses, action)
    expect(state).toEqual(expenses)
})

test('Should set expense', () => {
    const action = {
        type: 'SET-EXPENSES',
        expenses: [expenses[1]]
    }
    const state = ExpensesReducers(expenses, action)
    expect(state).toEqual([expenses[1]])
})
