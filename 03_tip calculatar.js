function calculateTip(billAmount, tipPercentage) {
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    const formattedTotalAmount = Math.round(totalAmount * 100) / 100;
    return formattedTotalAmount;
  }
  const billAmount = 50.00;
  const tipPercentage = 0.20;
  
  const totalAmount = calculateTip(billAmount, tipPercentage);
  console.log(`Total amount to be paid: ${totalAmount}`);
    