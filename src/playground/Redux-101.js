import { createStore } from 'redux'

const incrementCount = ({incrementBy = 1} = {}) => ({       //this fuction some called action-generator
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})


//Reducers
// 1. reducers are pure functions
//2. Never changes state or actions
const countReducers = (state = {count: 0}, action) => {        //this fuction is called reducer
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count : action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
             return state
}   }

const store = createStore(countReducers)

const unSubcribe =  store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }))          //increment starts fromm 5 if you dont declare number its default  by 1

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 5 }))

store.dispatch(setCount({ count: 404 }))