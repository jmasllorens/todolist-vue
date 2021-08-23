const { palindrome } = require('../utils/for_testing')

test('palindrome of insomni', () => {
    const result = palindrome('insomni')

    expect(result).toBe('inmosni')
})

test('palindrome of empty string', () => {
    const result = palindrome('')

    expect(result).toBe('')
})

test('palindrome of undefined', () => {
    const result = palindrome()

    expect(result).toBeUndefined()
})