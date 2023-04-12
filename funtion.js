// FUNCTIONS...
function showalert(){
    alert("hey");
}
showalert();

// function showalert(msg){  //same func with parameter..
//     alert(msg);
// }
// showalert("hii");

function sum(a,b){
console.log("Sum is " + (a+b)); 
}
sum(12,3);

function sum1(a,b){
return a+b; 
}
var ans=sum1(10,30);
console.log(ans);

//understanding the concept of func in js..
function sum(x,y){
    console.log(x+y); //a no + undefined is nan..
}
sum(8); //how it gives result NaN(not a no.) check in next..

// function sum(x,y){
//     console.log(x,y);
// }
// sum(8); //as only x is defined and y is not defined..

//..............//
function mul(a,b){
    console.log(a*b);
}
mul(10,2,6,7);//here the extra arguments get ignored by func in JS...
