function solution(k, tangerine) {
  let answer = 0;
  const tDic = {};

  tangerine.forEach((t) => (tDic[t] = (tDic[t] || 0) + 1));
  const tArr = Object.values(tDic).sort((a, b) => b - a);

  console.log(tArr);

  for (const t of tArr) {
    answer++;
    if (t < k) k -= t;
    else break;
  }

  return answer;
}
