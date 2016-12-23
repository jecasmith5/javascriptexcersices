for (var i = 1; i <= 100; i++) {
var answer= "";
if(i % 3 == 0)
 answer += "Fizz";
 if(i % 5 == 0)
 answer += "Buzz";
 console.log(answer || i);
}
