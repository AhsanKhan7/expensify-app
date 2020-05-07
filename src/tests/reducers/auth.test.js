import authReducer from '../../reducers/auth'

test('should set uid value with action', () => {
    const action = {
        type: 'LOGIN',
        uid: 'qwerty'
    }
    const state = authReducer({}, action)
    expect(state.uid).toBe(action.uid)
})

test('should remove uid value with action', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid: 'any string'}, action)
    expect(state).toEqual({})
})