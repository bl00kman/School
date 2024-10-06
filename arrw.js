  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }
  

const double = (n) => n * 2;
console.log (double(3))
