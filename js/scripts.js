var sieve = function(inputNumber) {
  var numberArray = [];

  var isPrime = false;

  for(var x=2; x <= inputNumber; x++){
    for(var checkAgainst = x; checkAgainst > 1; checkAgainst--){
      if ((x % checkAgainst !== 0) || (x === checkAgainst)){
        isPrime = true;
      } else {
        isPrime = false;
      }
      //   isPrime = true;
      // }
      // if (x % checkAgainst !== 0){
      //   isPrime = true;
      // } else {
      //   isPrime = false;
      // }

    }
    if (isPrime) {
      numberArray.push(x);
      isPrime = false;
    }
  }
  debugger;
  return numberArray;
};



  // var primeArray = []
  // for(var x = 2; x < inputNumber+1; x++) {
  //   numberArray.push(x)
  // }
  // var numberCheck = 2;
//   for(var numberCheck = 2; numberCheck < inputNumber;) {
//     for(var index=2; index < inputNumber; index++) {
//       // for(var location=0; location < numberArray.length; location++)
//       // if (alreadyIncluded(numberCheck, numberArray)) {
//       if (!(index % numberCheck === 0)) {
//         numberArray.push(index);
//       } else if (index === numberCheck) {
//         numberArray.push(index);
//         // numberCheck++;
//       }
//     }
//     numberCheck = numberArray.length + 2;
//   }
//   debugger;
//   return numberArray
//   // for(var location=0; location < inputNumber-2; location++) {
//   //   if(numberArray[location] !== null) {
//   //     primeArray.push(numberArray[location]);
//   //   }
//   // }
//   // return primeArray
// };
//
// var alreadyIncluded = function(number, array) {
//   result = false;
//   for(var location = 0; location < array.length; location++) {
//     if (array[location] === number) {
//       result = true;
//     }
//   }
//   return result;
// };
