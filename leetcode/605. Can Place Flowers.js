/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] === 0 &&
            flowerbed[i - 1] !== 1 &&
            flowerbed[i + 1] !== 1
        ) {
            flowerbed[i] = 1;
            count++;
        }
    }

    return count >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
