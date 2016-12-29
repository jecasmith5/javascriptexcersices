function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}
//my code
function reliableMultiply(a, b) {
  for(;;){
  try{
    return primitiveMultiply(a,b);
  }
  catch (x){
    if(!(x instanceof MultiplicatorUnitFailure))
    throw x;
    }
  }
}
console.log(reliableMultiply(8, 8));
// → 64
