var merge = function(intervals) {
  if (!intervals.length) return [];
  
  let ranges = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    let anyMerges = false;
    
    for (let j = 0; j < ranges.length; j++) {
      let range = ranges[j];
      
      if (range[0] > interval[1]) {
        if (!anyMerges) {
          ranges.splice(j, 0, interval);
          break;
        }        
      } else if (range[1] < interval[0]) {
        if (j >= (ranges.length - 1) && !anyMerges) {
          ranges.splice(j + 1, 0, interval);
          break;
        } 
      } else {
        let newRange = [Math.min(interval[0], range[0]), Math.max(interval[1], range[1])];        
        
        if (anyMerges) {
          ranges.splice(j - 1, 2, newRange);
          j--;
        } else {
          ranges[j] = newRange;
        }
        
        interval = newRange;
        anyMerges = true;
      }
    }
  }
  
  return ranges;
};