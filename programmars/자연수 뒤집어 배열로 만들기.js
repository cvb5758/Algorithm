function solution(n) {
    let answer = [];

    answer = n
        .toString()
        .split('')
        .reverse()
        .map((v) => parseInt(v));

    return answer;
}

console.log(solution(12345));
