function solution(sizes) {
  const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
      if (w > maxSize[0]) maxSize[0] = w;
      if (h > maxSize[1]) maxSize[1] = h;
  })
  return maxSize[0]*maxSize[1];
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));