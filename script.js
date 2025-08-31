function convertToRoman(num) {
  if (num === 0) return "N"; // Romans used 'N' for zero (optional)

  const obj = {
    0: ['M', 1000], 
    1: ['D', 500], 
    2: ['C', 100], 
    3: ['L', 50], 
    4: ['X', 10], 
    5: ['V', 5], 
    6: ['I', 1]
  };

  // Add subtraction cases manually
  const symbols = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let result = "";

  for (let [symbol, value] of symbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Example
// console.log(convertToRoman(36)); // XXXVI

// do not edit below this line
module.exports = convertToRoman;
