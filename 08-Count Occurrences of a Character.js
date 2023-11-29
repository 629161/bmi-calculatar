function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  let str = "AlmaBetter";
  let char = "a";
  let count = countOccurrences(str, char);
  console.log(count); 
    