/* level: 1 */

function solution(n, m, section) {
  let answer = 0;
  let covered = 0;

  for (let i = 0; i < section.length; i++) {
    if (section[i] > covered) {
      covered = section[i] + m - 1;
      answer++;
    }
  }
  return answer;
}
