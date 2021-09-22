const sum = (numA, numB) => {
  if (typeof numA === 'string' || typeof numB === 'string') {
    return 'Enter a valid number'
  }
  return numA + numB
}

exports.sum = sum