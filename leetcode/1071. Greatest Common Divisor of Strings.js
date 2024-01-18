/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
      return '';
  }

  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
  const answer = str1.substring(0, gcd(str1.length, str2.length));

  return answer;
};

console.log(
  gcdOfStrings(
      'TAUXXTAUXXTAUXXTAUXXTAUXX',
      'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX'
  )
);
