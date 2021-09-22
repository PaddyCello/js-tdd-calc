
const { sum } = require('./index')

test('adds two integers together', () => {
  expect(sum(1,2)).toBe(3)
})

test('does not add strings together', () => {
  expect(sum('foo', 'bar')).toBe('Enter a valid number')
})

test('does not add arrays', () => {
  expect(sum([1,2,3],[4,5,6])).toBe('Enter a valid number')
})