function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);

    let min = 0;

    for (let max = people.length - 1; max >= min; max--) {
        if (people[min] + people[max] <= limit) {
            min++;
        }

        answer++;
    }

    return answer;
}

console.log(solution([70, 50, 80, 50], 100));
