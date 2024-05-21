function solution(s) {
  let answer = [];
  let zero = 0;
  let count = 0;

  while (s !== '1') {
    let str = s.split('');
    let a = '';

    for (let x of str) {
      if (x === '0') {
        zero++;
      } else {
        a += x;
      }
    }

    s = a.length.toString(2);
    count++;
  }

  answer[0] = count;
  answer[1] = zero;

  return answer;
}
