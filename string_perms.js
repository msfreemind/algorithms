const stringPerms = str => {
  if (str.length <= 1) return [str];

  let newPerms = [];
  const subPerms = stringPerms(str.substring(1));  

  subPerms.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      let permArr = perm.split('');
      permArr.splice(i, 0, str.charAt(0));
      newPerms.push(permArr.join(''));
    }
  });

  return newPerms;
};