const knapsack = (items, weightLimit) => {
  let valueMatrix = [];

  for (let currRow = 0; currRow < items.length + 1; currRow++) {
    valueMatrix[currRow] = [];

    for (let currWeight = 0; currWeight <= weightLimit; currWeight++) {
      if (currRow === 0) {
        valueMatrix[currRow][currWeight] = 0;
        continue;
      }

      const itemWeight = items[currRow - 1].weight;
      const itemVal = items[currRow - 1].value;
      const prevRowVal = valueMatrix[currRow - 1][currWeight];
      
      if (itemWeight > currWeight) valueMatrix[currRow][currWeight] = prevRowVal;
      else valueMatrix[currRow][currWeight] = Math.max(prevRowVal, valueMatrix[currRow - 1][currWeight - itemWeight] + itemVal);
    }
  }
  
  return valueMatrix[valueMatrix.length - 1][weightLimit];
}