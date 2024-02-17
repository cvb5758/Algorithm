/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ']') {
      stack.push(s[i]);
    } else {
      let temp = '';
      let current = stack.pop();
      while (current !== '[') {
        temp = current + temp;
        current = stack.pop();
      }
      let num = '';
      current = stack.pop();
      while (!isNaN(current)) {
        num = current + num;
        current = stack.pop();
      }
      stack.push(current);
      stack.push(temp.repeat(num));
    }
  }

  return stack.join('');
};

console.log(decodeString('3[a]2[bc]')); // 'aaabcbc'
