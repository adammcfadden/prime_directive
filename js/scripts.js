var sieve = function(inputNumber) {
  var numberArray = []
  var primeArray = []
  for(var x = 2; x < inputNumber+1; x++) {
    numberArray.push(x)
  }

  for(var numberCheck = 2; numberCheck < inputNumber; numberCheck++) {
    for(var index=0; index < inputNumber-2; index++) {
      if (!(numberArray[index] === numberCheck)) {
        if (numberArray[index] % numberCheck === 0) {
          numberArray[index] = null;
        }
      }
    }
  }

  for(var location=0; location < inputNumber-2; location++) {
    if(numberArray[location] !== null) {
      primeArray.push(numberArray[location]);
    }
  }
  return primeArray
};


  // numberArray.forEach(removeMultiplesOf2);
  //
  // debugger;

//
// var removeMultiplesOf2 = function(element, index, array) {
//   if (!(element === 2)) {
//     if (element % 2 === 0) {
//       array[index] = 0;
//     }
//   }
// };
//
//
//
//


  // return Array.apply(null, {length: (inputNumber + 1)}).map(Number.call, Number);
