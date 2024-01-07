function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    let scores = patterns.map((pattern) =>
        answers.reduce((score, answer, index) => {
            return score + (answer === pattern[index % pattern.length] ? 1 : 0);
        }, 0)
    );

    let maxScore = Math.max(...scores);

    return scores
        .map((score, index) => (score === maxScore ? index + 1 : null))
        .filter((val) => val !== null);
}

console.log(solution([1, 2, 3, 4, 5]));
