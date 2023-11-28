function isPalindrome(str) {
    const lowercaseStr = str.toLowerCase();
    const filteredStr = lowercaseStr.replace(/[^a-z0-9]/g, '');
    const reversedStr = filteredStr.split('').reverse().join('');
    return filteredStr === reversedStr;
  }
  console.log(isPalindrome('racecar')); 
console.log(isPalindrome('madam'));
console.log(isPalindrome('A man, a plan, a canal - Panama')); 
console.log(isPalindrome('radar')); 
console.log(isPalindrome('noon')); 
console.log(isPalindrome('never odd or even')); 
