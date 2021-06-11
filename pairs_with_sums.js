const pairsWithSum = (arr, target) => {
  let pairs = [];
  let availComps = {};

  arr.forEach(num => {
    let complement = target - num;

    if (availComps[complement] && availComps[complement] > 0) {
      pairs.push([num, complement]);
      availComps[complement] -= 1;
    } else {
      availComps[num] = availComps[num] ? availComps[num] + 1 : 1;
    }
  })
  
  return pairs;
};