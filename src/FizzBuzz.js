const FizzBuzz = (num) => {
  let result = '';

  if (num === 0) return num;
  if (num % 3 === 0) result += 'Fizz';
  if (num % 5 === 0) result += 'Buzz';

  if (result === '') result = num;

  return result;
};

function foo() {
  return 'bar';
}

foo();

export default FizzBuzz;
