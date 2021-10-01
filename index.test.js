
const { sum, subtract, vetNumber, chooseOperand } = require('./index')

test('adds two integers together', () => {
  expect(sum(1,2)).toBe(3)
})

test('does not add strings together', () => {
  expect(sum('foo', 'bar')).toBe('Enter a valid number')
})

test('does not add arrays', () => {
  expect(sum([1,2,3],[4,5,6])).toBe('Enter a valid number')
})

test('subtracts second argument from first', () => {
  expect(subtract(2,1)).toBe(1)
})

test('does not subtract non-numerical data types', () => {
  expect(subtract('foo', 'oo')).toBe('Enter a valid number')
})

test('only allows numerical data types to progress to calculation methods', () => {
  expect(vetNumber('foo', 'oo')).toBe('Enter a valid number')
})

test('calls calculation method if data type is correct', () => {
  expect(vetNumber(1, 1)).toBe(2)
})

test('allows choice of mathematical operator', () => {
  expect(chooseOperand('+')).toBe('plus')
  expect(chooseOperand('-')).toBe('minus')
})

test('checks that operator is valid', () => {
  expect(chooseOperand('&')).toBe('Enter a valid mathematical operator')
})
