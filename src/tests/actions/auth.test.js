import { login, logout } from "../../actions/auth"

test('should action auth run', () => {
    const uid = 'abc'
    const action = login(uid) 
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should action logout run', () => {
    const action = logout() 
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})
