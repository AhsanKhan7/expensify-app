import { addExpense, removeExpense, editExpense } from '../../actions/expenses'


test('should add expense run with provided values'), () => {
  const expenseData = {
        description: 'tokyo',
        note: 'caio',
        amount: 90,
        createdAt: 1000
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
      type: 'ADD-EXPENSE',
      expense: {
          id: expect.any(String),
          ... expenseData
  }})
}

test('should test run by default value'), () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD-EXPENSE',
        expense: {description: '',
        id: '',
        note: '',
        amount: 0,
        createdAt: 0
    }})
}


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