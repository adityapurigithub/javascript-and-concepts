//FUNCTION HOISTING...
   //check at last of this file...
function hoistDemo(){
    console.log(i);
    var i=1;  //here i is defined after printing in console..
             // in JS the variable declaration in function 
             //goes to the top of function so its 
             //give o/p as ..undefined...

}
hoistDemo();



//the below function is written as a explanation of the above
//function..means same as the above function...
function hoist(){
var i;
console.log(i);
i=10;  // this is hoisting means as variable automattically get 
       //declarated at top of function...
}
hoist();// both will give same o/p...


/*not only in function there is variable hoisting as u can 
define it in last or middle but as in JS it get automattically
declared in the top..*/

//variable hoisting..
var a=10;
console.log(a+b); //here b get declared...
var b=20; //here b is declared and defined...but due to hoisting 
          //it goes to top ...so o/p will be (10+undefined=nan)

//.........//

//this is actuall function hoisting...
hoistDemofun();
function hoistDemofun(){
    console.log(j);
    var j=1;
}/* this func is defined after calling it but as in JS hoisting
is there so no error in o/p and will run as a usuall..*/