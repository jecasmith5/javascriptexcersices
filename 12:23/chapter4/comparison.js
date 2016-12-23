function deepEqual(x,y) {
  if (x === y)
    return true;

    if (x == null || typeof x != "object" ||y == null || typeof y != "object")
        return false;

      var xprop = 0;
      var yprop = 0;

      for (var prop in x)
        xprop += 1;

      for (var prop in y) {
        yprop += 1;

        if (!(prop in x) || !deepEqual(x[prop], y[prop]))
          return false;
      }

      return xprop == yprop;
    }


var obj = {here: {is: "an"},object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
