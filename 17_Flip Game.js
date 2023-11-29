function findMove(str) {
    const validMoves = [];
  
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === '+' && str[i + 1] === '+') {
        const newStr = str.substring(0, i) + '--' + str.substring(i + 2);
        validMoves.push(newStr);
      }
    }
  
    return validMoves;
  }
  