/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
    let vowles = [];
    let index = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[aeiou]/gi)) {
            vowles.push(s[i]);
            index.push(i);
        }
    }
    vowles = vowles.reverse();
    let result = s.split('');

    for (let i = 0; i < index.length; i++) {
        result[index[i]] = vowles[i];
    }
    return result.join('');
};
