const longestCommonSubsequence = (str1, str2) => {
  let dp = [];

  for (let currRow = 0; currRow <= str1.length; currRow++) {
    dp[currRow] = [];

    for (let currCol = 0; currCol <= str2.length; currCol++) {
      if (currRow === 0 || currCol === 0) {
        dp[currRow][currCol] = 0;
        continue;
      }

      const rowChar = str1.charAt(currRow - 1);
      const colChar = str2.charAt(currCol - 1);
      
      if (rowChar === colChar) dp[currRow][currCol] = 1 + dp[currRow - 1][currCol - 1];
      else dp[currRow][currCol] = Math.max(dp[currRow - 1][currCol], dp[currRow][currCol - 1]);
    }
  }
  
  let sequence = [];
  let currRow = str1.length;
  let currCol = str2.length;
  let count = dp[currRow][currCol];

  while (count) {
    if (count === dp[currRow][currCol - 1]) {
      currCol--;
    } else if (count === dp[currRow - 1][currCol]) {
      currRow--;
    } else {
      sequence.unshift(str1.charAt(currRow - 1));
      currRow--;
      currCol--;
      count--;
    }
  }

  return sequence.join('');
}