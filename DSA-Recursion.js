const countingSheep = function (num) {
  if (num === 0) {
    return "All the sheep jumped over the fence.";
  }
  return (
    `${num}: Another sheep jumps over the fence. ` + countingSheep(num - 1)
  );
};

console.log(countingSheep(3));

const powerCalculator = function (base, power) {
  if (power <= 0) {
    return "exponent should be >= 0";
  }
  if (power === 1) {
    return base;
  }
  return powerCalculator(base, power - 1) * base;
};

console.log(powerCalculator(10, 3));

const reverse = function (string) {
  if (string.length === 1) {
    return string[0];
  }
  return reverse(string.slice(1)) + string[0];
};

console.log(reverse("Julia"));

const triangularNumber = function () {};

const stringSplitter = function (string, separator) {
  let results = [];
  if (!string.includes(separator)) {
    return [string];
  }
  // let index = string.indexOf(separator);
  results = [
    string.slice(0, string.indexOf(separator)),
    ...stringSplitter(string.slice(string.indexOf(separator) + 1), separator),
  ];
  return results;
};

console.log(stringSplitter("01/05/2007", "/"));

const fibonacci = (number) => {
  // Base Case
  if (number === 1) return [1];
  if (number === 2) return [1, 1];
  // Recursive Case
  const sequence = [...fibonacci(number - 1)];
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  return sequence;
};

console.log(fibonacci(13));

const factorial = (number) => {
  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
};

console.log(factorial(10));
console.log(factorial(5));
