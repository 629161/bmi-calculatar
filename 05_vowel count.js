function countVowels(str) {
    let vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase(); 
      
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++; 
      }
    }
  
    return vowelCount; 
  }
  const inputString = "AlmaBetter";
const vowelCount = countVowels(inputString);
console.log(`The number of vowels in "${inputString}" is: ${vowelCount}`);
