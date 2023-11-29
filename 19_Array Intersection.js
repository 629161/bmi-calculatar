function arrayIntersection(arr1, arr2) {
    const intersection = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j] && !intersection.includes(arr1[i])) {
          intersection.push(arr1[i]);
        }
      }
    }
    return intersection;
  }
  const arr1 = [2, 4, 6, 8];
  const arr2 = [1, 3, 5, 7];
  const intersection = arrayIntersection(arr1, arr2);
  console.log(intersection);
   // Output: []
    