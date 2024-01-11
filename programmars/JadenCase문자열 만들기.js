function solution(s) {
    return s
        .split(' ')
        .map((word) => {
            if (!word) {
                return word;
            }
            if (!isNaN(word[0])) {
                return word[0] + word.slice(1).toLowerCase();
            }

            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ');
}

console.log(solution('1HELLO 1WORLD'));
