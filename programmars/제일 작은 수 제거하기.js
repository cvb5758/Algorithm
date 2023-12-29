function solution(arr) {
    if (arr.length <= 1) return [-1];

    const min = Math.min(...arr);
    const answer = arr.filter((v) => v !== min);

    return answer;
}

console.log(solution([10]));
