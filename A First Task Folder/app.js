function fact(number) {
  let result = 0;
  for (let i = 2; i <= number; i++);
  {
    result = result * i;
  }
  return result;
}

console.log(fact(3)); // 3 * 2 * 1 => 6
console.log(fact(4)); // 4 * 3 * 2 * 1 => 24
console.log(fact(5)); // 5 * 4 * 3 * 2 * 1 => 120

// const names = ["Pikachu", "Bulbasaur", "Squirrel", "Pikachu"];
// // Index starts at zero
// console.log(names[1]);
// console.log(names.length);

// for (const el of names) {
//   console.log(el);
// }

// names.push("Charmander");

// const Charmander = names.find((el) => el === "Charmander");
// names.splice(2, 1);
// console.log(names);
