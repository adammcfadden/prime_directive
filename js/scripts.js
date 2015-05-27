var sieve = function(inputNumber) {
  var numberArray = []




  // var primeArray = []
  // for(var x = 2; x < inputNumber+1; x++) {
  //   numberArray.push(x)
  // }
  // var numberCheck = 2;
  for(var numberCheck = 0; numberCheck < inputNumber - 2;) {
    for(var index=2; index < inputNumber; index++) {
      // for(var location=0; location < numberArray.length; location++)
      // if (alreadyIncluded(numberCheck, numberArray)) {
      if (!(index % (numberCheck + 2) === 0)) {
        numberArray.push(index);
      } else if (index === (numberCheck + 2)) {
        numberArray.push(index);
        // numberCheck++;
      }
    }
    numberCheck = numberArray[((numberCheck) + 1)];
  }
  debugger;
  return numberArray
  // for(var location=0; location < inputNumber-2; location++) {
  //   if(numberArray[location] !== null) {
  //     primeArray.push(numberArray[location]);
  //   }
  // }
  // return primeArray
};

var alreadyIncluded = function(number, array) {
  result = false;
  for(var location = 0; location < array.length; location++) {
    if (array[location] === number) {
      result = true;
    }
  }
  return result;
};
