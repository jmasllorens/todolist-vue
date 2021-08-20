const sum = (a, b) => {
  return a + b;
};

const checks = [
  { a: 0, b: 0, result: 0 },
  { a: 1, b: 3, result: 4 },
  { a: -1, b: 1, result: 0 }
]

/* if (sum(0, 0) !== 0) {
  new Error('sum of 0 and 0 expected to be 0');
}
if (sum(1, 3) !== 4) {
  new Error('sum of 1 and 3 expected to be 4');
} */

checks.forEach(check => {
  const {a, b, result} = check

  console.assert(
    sum(a, b) == result,
    `Sum of ${a} and ${b} expected to be ${result}`
  )
}
)

console.assert(
  sum(2, 6) == 8,
  'sum of 2 and 6 expected to be 8'
)
console.assert(
  sum(1, 3) == 4,
  'sum of 1 and 4 expected to be 5'
)

console.log(`Performed checks: ${checks.length}`)


