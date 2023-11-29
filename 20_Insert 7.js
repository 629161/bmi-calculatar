function insert7(str) {
    let modifiedString = "";
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        count++;
      }
  
      if (count === 6 && str[i] !== " ") {
        modifiedString += str[i] + "7";
        count = 0;
      } else {
        modifiedString += str[i];
      }
    }
  
    return modifiedString;
  }
  const inputString = "This is a test string";
  const modifiedString = insert7(inputString);
  console.log(modifiedString);
    