var a=10; //creating variables..
var b=13;
//we can also use let keyword instead of var...
let c=33;
console.log(c);
console.log(a); //for printing/logging in console..

console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);

console.log(a+=b);  //a=a+b..

// alert("hey"); //window.alert("hey");

// CONDITIONAL
var i=-1;
if(i){
    console.log("true"); //true for all values 'except 0 and empty string'..
}else{
    console.log("false");  //false for 0 and empty string..
}

// LOOPS
var x=1;
while(x<5){
    console.log(x);
    x++;
}

for(;x<7;x++){     // x is defined already
    console.log(x);
}

var y=2;
do{
    console.log(y);
    y++;
}while(y<10);

//Other things...

var x=prompt("Enter your name.."); //window.prompt or prompt for taking input form user
console.log(x);
