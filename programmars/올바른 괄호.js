function solution(s) {
    let flag = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            flag++;
        } else if (s[i] === ')') {
            if (flag === 0) {
                return false;
            }
            flag--;
        }
    }

    return flag === 0;
}

console.log(solution('()()'));
