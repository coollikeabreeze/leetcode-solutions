/*
268. Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.


Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.
 */

var missingNumber = function(nums) {
  let possibleNums = []
  for (let i = 0; i < nums.length+1; i++) {
    possibleNums.push(i)
  }

  //0(n*n-1)
  for (let j = 0; j < possibleNums.length; j++) {
      if (!nums.includes(possibleNums[j])) {
          return j
      }
  }
};

var missingNumber = function(nums) {
    let possibleNums = new Array(nums.length+1).fill(-1)

    //O(n)
    for (let i = 0; i < nums.length; i++) {
        //reassigns that index to the number in nums
        possibleNums[nums[i]] = nums[i]
    }

    //for(const num of nums) {
    //possibleNums[num] = num;
    //}

    //O(n)
    return possibleNums.indexOf(-1)
};
