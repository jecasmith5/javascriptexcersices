//this is not my code im havin trouble understanding this exercise so i ran a code which worked in order to try and decipher what was happening,
//if any suggestions on how it works please let me know.
function logFive2(sequence) {
  for (var i = 0; i < 5 && sequence != null; i++) {
    console.log(sequence.head());
    sequence = sequence.rest();
  }
}
function ArraySeq2(array, offset) {
  this.array = array;
  this.offset = offset;
}
ArraySeq2.prototype.rest = function() {
  return ArraySeq2.make(this.array, this.offset + 1);
};
ArraySeq2.prototype.head = function() {
  return this.array[this.offset];
};
ArraySeq2.make = function(array, offset) {
  if (offset == null) offset = 0;
  if (offset >= array.length)
    return null;
  else
    return new ArraySeq2(array, offset);
};

function RangeSeq2(from, to) {
  this.from = from;
  this.to = to;
}
RangeSeq2.prototype.rest = function() {
  return RangeSeq2.make(this.from + 1, this.to);
};
RangeSeq2.prototype.head = function() {
  return this.from;
};
RangeSeq2.make = function(from, to) {
  if (from > to)
    return null;
  else
    return new RangeSeq2(from, to);
};

logFive2(ArraySeq2.make([1, 2]));
// → 1
// → 2
logFive2(RangeSeq2.make(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
