const ageCalculator = function (name, yearOfBirth, currentYear) {
  let output = "";
  let age = currentYear - yearOfBirth; 
  output = name + " is " + age + " years old.";
  return output;
}

console.log(ageCalculator("Miranda", 1983, 2019));
console.log(ageCalculator("Ferdinand", 1988, 2019));
console.log(ageCalculator("Alice", 1991, 2019)); 