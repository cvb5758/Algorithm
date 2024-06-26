function solution(s) {
  const stack = [];
  let isRight = true;
  let answer = 0;
  if (s.length % 2 === 1) return 0;

  for (let i = 0; i < s.length; i++) {
    let candidate = s.slice(i) + s.slice(0, i);
    isRight = true;
    for (const word of candidate) {
      if (word === '(' || word === '[' || word === '{') stack.push(word);
      else {
        let leftWord = stack.pop();
        if (word === ')' && leftWord === '(') continue;
        if (word === ']' && leftWord === '[') continue;
        if (word === '}' && leftWord === '{') continue;
        isRight = false;
        break;
      }
    }
    if (isRight) answer++;
  }

  return answer;
}
