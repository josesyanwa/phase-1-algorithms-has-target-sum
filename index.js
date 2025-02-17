
  // Write your algorithm here
  function hasTargetSum(nums, target) {
    // Iterate through the array using two nested loops
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // Check if the pair of numbers adds up to the target
            if (nums[i] + nums[j] === target) {
                return true;
            }
        }
    }
    // If no pair is found, return false
    return false;
}

//Test cases
//console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));  // true
//console.log(hasTargetSum([22, 19, 4, 6, 30], 25));    // true
//console.log(hasTargetSum([1, 2, 5], 4));              // false



/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
