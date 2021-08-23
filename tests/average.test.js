const { average } = require('../utils/for_testing')

describe.skip ('average', () => {

    test('of one value is the value itself', () => {
        expect(average([1])).toBe(1)
    })

    test('of empty array is zero', () => {
        expect(average([])).toBe(0)
    })

    test('of undefined array is undefined', () => {
        expect(average(undefined)).toBeUndefined()
    })
})