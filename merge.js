/*function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }*/

  const filterOutOdds = () => args.filter(v => v % 2 === 0)

