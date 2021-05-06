function balancedParens(str) {
  let brackets = [];
  
  for (var i = 0; i < str.length; i++) {
    switch (str.charAt(i)) {
      case '(':
        brackets.push('(');
        break;

      case ')':
        if (brackets.pop() !== '(') return false;
        break;

      case '[':
        brackets.push('[');
        break;

      case ']':
        if (brackets.pop() !== '[') return false;
        break;

      case '{':
        brackets.push('{');
        break;

      case '}':
        if (brackets.pop() !== '{') return false;
        break;

      default:
        break;
    }
  }

  return brackets.length === 0;
}

exports.balancedParens = balancedParens;