function solution(s) {
  let answer = "";
  let str = s.split("");

  let cnt = 0;

  for(let ss of str) {
      cnt = ss === " " ? 0 : cnt + 1;
      answer += cnt % 2 === 0 ? ss.toLowerCase() : ss.toUpperCase();
  }

  return answer;
}

console.log(solution("try hello world"));