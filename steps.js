const steps = stepsLeft => {
  if (stepsLeft <= 2) return stepsLeft;
  return steps(stepsLeft - 3) + steps(stepsLeft - 2) + steps(stepsLeft - 1);
};