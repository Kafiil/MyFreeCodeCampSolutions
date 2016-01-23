function binaryAgent(str) {
  var arr = str.split(" ");
  var newArr = [];
  arr.map(function(val) {
    newArr[newArr.length] = transform(val);
  });
  return newArr.join("");
}

var transform = function(s) {
  var digit = parseInt(s, 2);
  return String.fromCharCode(digit);
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
