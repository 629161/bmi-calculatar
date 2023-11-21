function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    const healthClassification = () => {
      if (bmi < 18.5) {
        return 'Underweight';
      } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
      } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
      } else {
        return 'Obese';
      }
    };
    return healthClassification();
  }
  const weight = 70;
  const height = 1.75;
  const healthClassification = calculateBMI(weight, height);
  
  console.log(`Your health classification is ${healthClassification}.`);
  