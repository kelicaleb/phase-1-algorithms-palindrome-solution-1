function isPalindrome(word) {
  // Write your algorithm here
  return word.split('').reverse().join('') === word ? true : false
}

/* 
  Add your pseudocode here
  Reverse string
  if the reversed string equal to the original string
    return true
  otherwise
    return false
*/

/*
  Add written explanation of your solution here
  To get the reversed string, split the string to array of letter, reverse the array of letter and then rejoin the letter to a string again
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;