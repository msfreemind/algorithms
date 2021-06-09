const substrings = (str, memo={}) => {
  if (str.length <= 1) {
    memo[str] = [str]
    return memo[str];
  }

  if (!memo[str]) {
    const sub = str.substring(1);

    uniqPerms(sub, memo);
    const subPerms = memo[sub]; 

    memo[str] = [str.charAt(0)].concat(subPerms.map(perm => str.charAt(0).concat(perm)));
  }

  return Object.values(memo);
};