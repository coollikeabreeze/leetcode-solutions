/*
136. Single Number - EASY
5-6-2022

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1


Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
 */


//NOT CLEAN: HOLDS TOO MUCH DATA IN HASHTABLE
var singleNumber = function(nums) {

    let numsTable = {
        "1": {},
        "2": {}
    }

    for (let i = 0; i < nums.length; i++) {
        //if it was already counted
        if (numsTable["1"][nums[i]] != null) {
            //remove the value from the 1 key
            delete numsTable["1"][nums[i]]
            //add to the 2 key
            numsTable["2"][nums[i]] = 0
        } else {
            numsTable["1"][nums[i]] = 0
        }
    }


    return Object.keys(numsTable["1"])
};


//MORE OPTIMIZED; ONLY STORES THE VALUES THAT APPEAR ONCE
var singleNumber = function(nums) {
  let hash = {}
  for(let val of nums){

      hash[val] ? delete hash[val] : hash[val]=1;
      // console.log(hash[val], hash)

  }

  console.log(hash)
  return Object.keys(hash)[0]
};
