function shortestDistance(wordsDict, word1, word2) {
    let minDistance = Infinity;
    let word1Index = -1;
  
    for (let i = 0; i < wordsDict.length; i++) {
      if (wordsDict[i] === word1) {
        word1Index = i;
        if (word2Index !== -1) {
          minDistance = Math.min(minDistance, Math.abs(i - word2Index));
        }
      } else if (wordsDict[i] === word2) {
        word2Index = i;
        if (word1Index !== -1) {
          minDistance = Math.min(minDistance, Math.abs(i - word1Index));
        }
      }
    }
  
    return minDistance;
  }
  const wordsDict = ['practice', 'make', 'perfect', 'coding', 'skills', 'make'];
  const word1 = 'make';
  const word2 = 'coding';
  
  const shortestDistance = shortestDistance(wordsDict, word1, word2);
  console.log(shortestDistance); 
  // Output: 1
    