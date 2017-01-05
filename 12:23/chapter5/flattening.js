// var array = [[1, 2, 3], [4, 5], [6]];
// // Your code here.
// // → [1, 2, 3, 4, 5, 6]
//
// console.log(array.reduce(function(flat, current) {
//   return flat.concat(current);
// }, []));


var notFlatArray = [[1, 2, 3], [4, 5], [6]];

function flatArray(flatten){
  console.log(flatten.reduce(function(flatten,neww){
    return flatten.concat(neww);
  },[]));

}
flatArray(notFlatArray);
