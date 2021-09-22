const sum = (numA, numB) => {
  return typeof numA !== 'number' || typeof numB !== 'number' ? 'Enter a valid number' : numA + numB
}

exports.sum = sum