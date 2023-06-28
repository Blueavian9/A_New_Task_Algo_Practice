// function sumNumbers(numbers) {
//   return number[0] + numbers[1] + numbers[2]; // 0(1)
// }

function sumNumbers(numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sumNumbers([1, 3, 10, 50]));
