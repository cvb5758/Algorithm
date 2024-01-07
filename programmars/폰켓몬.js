function solution(nums) {
    let n = nums.length / 2;

    let set = new Set(nums);

    return set.size > n ? n : set.size;
}

console.log(Solution([3, 3, 3, 2, 2, 4]));
