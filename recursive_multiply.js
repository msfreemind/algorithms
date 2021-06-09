const recursiveMultiply = (num1, num2) => {
  if (num1 === 0 || num2 === 0) return 0;
  if (num1 === 1) return num2;
  if (num2 === 1) return num1;

  if (num1 > num2) return num1 + recursiveMultiply(num1, num2 - 1);
  else return num2 + recursiveMultiply(num1 - 1, num2);
};