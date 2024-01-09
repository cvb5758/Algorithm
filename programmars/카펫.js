function solution(brown, yellow) {
    let answer = [];
    let area = brown + yellow;

    for (let i = 1; i <= area; i++) {
        if (area % i === 0) {
            let width = i;
            let height = area / i;

            if (width >= height && (width - 2) * (height - 2) === yellow) {
                answer = [width, height];
                break;
            }
        }
    }

    return answer;
}

console.log(solution(10, 2));
