const compress = function (chars) {
  let read = 0,
    write = 0;

  while (read < chars.length) {
    const char = chars[read];
    let count = 0;

    while (read < chars.length && chars[read] === char) {
      read++;
      count++;
    }

    chars[write++] = char;
    if (count > 1) {
      for (const digit of count.toString()) {
        chars[write++] = digit;
      }
    }
  }

  return write;
};

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']));
