const parensCombos = num => {
  if (num === 0) return [];
  if (num === 1) return ["()"];

  const subParens = parensCombos(num - 1);
  let newParens =  new Set();

  subParens.forEach(sub => {
    newParens.add("()" + sub);
    newParens.add("(" + sub + ")");
    newParens.add(sub + "()");
  })

  return newParens;
};