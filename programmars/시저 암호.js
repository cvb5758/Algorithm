function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    let charASC = s.charCodeAt(i);
    if (charASC >= 65 && charASC <= 90) {
      charASC = ((charASC - 65 + n) % 26) + 65;
    } else if (charASC >= 97 && charASC <= 122) {
      charASC = ((charASC - 97 + n) % 26) + 97;
    }
    answer += String.fromCharCode(charASC);
  }
  return answer;
}

console.log(solution("AB", 1));
