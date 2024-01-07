function solution(name, yearning, photo) {
  let answer = [];

  let pointMap = new Map();
  name.forEach((e, i) => {
      pointMap.set(e, yearning[i]);
  });

  photo.map((v, i) => {
      let point = 0;
      v.array.forEach((e) => {
          if (pointMap.has(e)) {
              point += pointMap.get(e);
          }
      });
      answer.push(point);
  });

  return answer;
}

console.log(
  solution(
      ['may', 'kein', 'kain', 'radi'],
      [5, 10, 1, 3],
      [
          { array: ['may', 'kein', 'kain', 'radi'] },
          { array: ['may', 'kein', 'brin', 'deny'] },
          { array: ['kon', 'kain', 'may', 'coni'] },
      ]
  )
);
