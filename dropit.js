function drop(arr, func) {
  var l = arr.length;
  var newArr = new Array();

  for (var i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }

  for (var i = 0; i < l; i++) {
    if (!func(arr[i])) {
      newArr.shift();
    } else {
      return newArr;
    }
  }

  return [];
}

console.log(drop([1, 2, 3, 4], function(n) {
  return n >= 3;
}));
console.log(drop([1, 2, 3, 4], function(n) {
  return n > 5;
}));
console.log(drop([0, 1, 0, 1], function(n) {
  return n === 1;
}));

console.log(drop([1, 2, 3, 7, 4], function(n) {
  return n > 3;
}));
