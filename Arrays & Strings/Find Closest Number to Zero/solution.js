/**
 * @param {number[]} nums
 * @return {number}
 */

let findClosestNumber = function(nums) {
    let closestNum = nums[0]
    for (let n of nums) {
        if (Math.abs(closestNum) > Math.abs(n) || (Math.abs(closestNum) === Math.abs(n) && closestNum < n)){
            closestNum = n
        }
    }
    return closestNum
};


console.log(findClosestNumber([-4,-2,1,4,8]))
console.log(findClosestNumber([-1,1,1]))
console.log(findClosestNumber([-10,-12,-54,-12,-544,-10000]))