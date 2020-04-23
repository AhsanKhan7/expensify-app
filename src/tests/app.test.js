const add = (a, b) => a + b
test('should is run', () => {
    const result = add(7, 2)
    expect(result).toBe(9)
})


const generateGreeting = (name) => `Hello ${name}!`
test('should greeting by name', () => {
    const result = generateGreeting('Ahsan')
    expect(result).toBe('Hello Ahsan!')
})
