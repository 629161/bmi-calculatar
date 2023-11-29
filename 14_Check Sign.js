function checkSign(num1, num2, num3) {
    let positiveCount = 0;
    let negativeCount = 0;
  
    if (num1 > 0) {
      positiveCount++;
    } else {
      negativeCount++;
    }
  
    if (num2 > 0) {
      positiveCount++;
    } else {
      negativeCount++;
    }
  
    if (num3 > 0) {
      positiveCount++;
    } else {
      negativeCount++;
    }
  
    if (positiveCount === 3) {
      return "+++";
    } else if (positiveCount === 2) {
      return "++-";
    } else if (positiveCount === 1) {
      return "+--";
    } else {
      return "---";
    }
  }
  