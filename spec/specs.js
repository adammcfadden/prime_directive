describe('sieve', function() {
  it('will return a list of numbers up to the number given, excluding 0, and 1', function() {
    var number = 5;
    expect(sieve(number)).to.eql([2, 3, 4, 5]);
  });

  it('will return a list of numbers excluding multiples of 2 (except the number 2)', function() {
    var number = 10;
    expect(sieve(number)).to.eql([2, 3, 5, 7]);
  });
});



// for(var numberCheck = 2; numberCheck < inputNumber; numberCheck++) {
//   for(var index=0; index < inputNumber-2; index++) {
//     if (!(index === numberCheck)) {
//       if (!(index % numberCheck === 0)) {
//         numberArray.push(numberCheck);
//       }
//     } else {
//       numberArray.push(numberCheck);
//     }
//   }
// }
