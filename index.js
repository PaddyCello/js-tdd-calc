const sum = (numA, numB) => {
  if (typeof numA !== 'number' || typeof numB !== 'number') {
    return 'Enter a valid number'
  }
  return numA + numB
}

exports.sum = sum