/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

const powersOfTwo = (n) => {
  const array = [1];
  let current = 2;
  let counter = 1
  if(n === 0) {
    return [1];
  }
  while(counter < n + 1) {
    array.push(current);
    current *= 2;
    counter++;
  }

  return array;
}