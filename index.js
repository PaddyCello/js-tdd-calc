const operands = {
  '+': 'plus',
  '-': 'minus',
  '/': 'divide',
  '*': 'multiply'
}

function vetNumber(numA, numB) {
  if (typeof numA !== 'number' || typeof numB !== 'number') {
    return 'Enter a valid number'
  } else {
    return sum(numA, numB)
  }
}

function chooseOperand(operand) {
  return operands[operand]
}

function sum(numA, numB) {
  return typeof numA !== 'number' || typeof numB !== 'number' ? 'Enter a valid number' : numA + numB
}

function subtract(numA, numB) {
  return typeof numA !== 'number' || typeof numB !== 'number' ? 'Enter a valid number' : numA - numB
}

exports.sum = sum
exports.subtract = subtract
exports.vetNumber = vetNumber
exports.chooseOperand = chooseOperand
