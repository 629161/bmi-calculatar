function titleCase(sentence) {
    const words = sentence.split(' ');
  
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const titleCasedSentence = capitalizedWords.join(' ');
  
    return titleCasedSentence;
  }
  const inputSentence = "Dream big, work hard, and stay focused";
const titleCasedSentence = titleCase(inputSentence);
console.log(`The title-cased sentence is: ${titleCasedSentence}`);
