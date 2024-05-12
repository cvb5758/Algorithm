function solution(citations) {
  let hIndex = 0;

  citations.sort((a, b) => a - b);

  for (let i = 0; i < citations.length; i++) {
    let smallCnt = Math.min(citations[i], citations.length - i);
    hIndex = Math.max(hIndex, smallCnt);
  }

  return hIndex;
}
