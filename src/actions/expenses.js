import uuid from 'uuid'
import database from '../firebase/firebase'


// ADD-EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD-EXPENSE',
    expense
})

export const startAddExpense = ( expenseData = {} ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description='',
            note='', 
            amount=0, 
            createdAt=0
        } = expenseData
        const expense = {description, note, amount, createdAt}

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}


// REMOVE-EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE-EXPENSE',
    id,
})

export const startRemoveExpense = ( {id} = {} ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }))
        })
    }

}
// EDIT-EXPENSE
export const editExpense = (id, updates) => ({
    type: "EDIT-EXPENSE",
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense( id, updates ))
        })
    }
}

//SET-EXPENSE
export const setExpenses = (expenses) => ({
    type: 'SET-EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = []

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                 })
            })
        dispatch(setExpenses(expenses))
        })
    }
}

