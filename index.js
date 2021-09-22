const vetNumber = (numA, numB) => {
  if (typeof numA !== 'number' || typeof numB !== 'number') {
    return 'Enter a valid number'
  }
}

const sum = (numA, numB) => {
  return typeof numA !== 'number' || typeof numB !== 'number' ? 'Enter a valid number' : numA + numB
}

const subtract = (numA, numB) => {
  return typeof numA !== 'number' || typeof numB !== 'number' ? 'Enter a valid number' : numA - numB
}

exports.sum = sum
exports.subtract = subtract
exports.vetNumber = vetNumber
