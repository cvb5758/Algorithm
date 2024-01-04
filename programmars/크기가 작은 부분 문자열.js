function solution(t, p) {
    let answer = 0;
    for (let i = 0; i < t.length; i++) {
        let temp = t.slice(i, i + p.length);
        if (temp.length < p.length) break;
        else if (temp <= p) answer++;
    }

    return answer;
}

console.log(solution('3141592', '271'));
