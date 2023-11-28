function findLongestWord(sentence) {
    const words = sentence.split(' ');
  
    let longestWordLength = 0;
    for (const word of words) {
      if (word.length > longestWordLength) {
        longestWordLength = word.length;
      }
    }
  
    return longestWordLength;
  }
  const inputSentence = "Coding is fun with fellow learners";
const longestWordLength = findLongestWord(inputSentence);
console.log(`The length of the longest word in "${inputSentence}" is: ${longestWordLength}`);
