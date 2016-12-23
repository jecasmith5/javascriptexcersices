var size=8;

var wholeboard="";

for (var line = 1; line <= size; line++) {
  for(i=0;i<size;i++){
    if((i+line) % 2 == 0)
    wholeboard+=" ";
      else {wholeboard+="#";}
  }
  wholeboard+="\n";
}
console.log(wholeboard);
