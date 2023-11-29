function swapConsecutiveCharacters(str) {
    let swappedString = "";
  
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        swappedString += str[i + 1];
      } else {
        swappedString += str[i];
      }
    }
  
    return swappedString;
  }
  const inputString = "AlmaBetter";
  const swappedString = swapConsecutiveCharacters(inputString);
  console.log(swappedString);
   // Output: llaaeettrr
    