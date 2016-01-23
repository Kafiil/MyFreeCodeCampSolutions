function steamroller(arr) {

  var newArr = [];


  var recursive = function(arg) {
    if (!Array.isArray(arg)) {
      newArr.push(arg);
    } else {
      for (var item in arg) {
        recursive(arg[item]);
      }
    }
  }

  recursive(arr);

  return newArr;
}


console.log(steamroller([[["a"]], [["b"]]]));
