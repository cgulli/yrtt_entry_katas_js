// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice.
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases below.

// Good luck!

function singles(arr) {
  if (arr === undefined) throw new Error("array is required");
  let difference = 0;
  let result = 0;
  const noDuplicatesArray = Array.from(new Set(arr));

  const noDuplicatesArraySum = noDuplicatesArray.reduce(function (
    accumulator,
    currentValue
  ) {
    return accumulator + currentValue;
  },
  0);

  const arraySum = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  if (arraySum > noDuplicatesArraySum) {
    difference = arraySum - noDuplicatesArraySum;
    result = arraySum - difference * 2;
  } else {
    result = arraySum;
  }
  return result;
}

module.exports = {
  singles,
};
