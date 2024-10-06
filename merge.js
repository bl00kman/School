/*function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }*/

  const filterOutOdds = () => {
    var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
});
}
   
   
    const double = (n) => n * 2;
console.log (double(3))