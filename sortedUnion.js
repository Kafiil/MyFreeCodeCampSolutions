function unite(arr1, arr2, arr3) {
  var newArr =new Array();
  for(var item in arguments){
    arguments[item].map(function(val){
      if(!newArr.includes(val)){
        newArr.push(val);
      }
    });
  }
  return newArr;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//This solution is working only on modern browser that support Array.includes()
// You can replace it with Array.indexOf()
