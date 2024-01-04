function solution(arr) {
  let answer = arr.filter((v, i) => v !== arr[i + 1]);

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
