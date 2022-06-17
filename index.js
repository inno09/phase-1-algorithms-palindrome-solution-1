// function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  // if the reversed string is the same as the input
  //   return true
  // else
  //   return false
// function reverseString(word) {
//   const wordArray = word.split("");
//   const reversedWordArray = wordArray.reverse();
//   const reversedWord = reversedWordArray.join("")
//   return reversedWord
// }
// function isPalindrome(word) {
//   const reversedWord = reverseString(word)
//   if (word === reversedWord) {
//     return true;
//   }else {
//     return false;
//   } 
// }

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}
function reverseString(word) {
  return word.split("").reverse().join("");
}
console.log (isPalindrome('mom'))

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
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
