function solution(s) {
    let answer = '';

    let max = Math.max(...s.split(' '));
    let min = Math.min(...s.split(' '));

    return (answer = `${min} ${max}`);
}

console.log(solution('1 2 3 4'));
