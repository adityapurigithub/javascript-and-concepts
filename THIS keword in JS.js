'use strict';
console.log(this);

function print(){
    console.log(this);
}
print();

var print1=function(){  // this is function using expression
    console.log(this);
};
print1();


var obj={
    'prop1':200,
    'print3':function(){
        console.log(this);  // here this will refer to object.
    }
}
obj.print3(); //calling via object..


// Using Strict with THIS keyword..
//Strict is always used at top...
function printS(){
    console.log(this);
}
printS();

var objS={
    'prop0':20,
    'printSt':function(){
        console.log(this);
    }
}
objS.printSt();

// now to bound function to an object ..call(),apply() is used..
printS.call(objS);

printS.apply(objS);

function printval(a,b){
    console.log(a,b);
    console.log(this);
}
printVal(30,40);  // check diff without bounding to object in case of strict.
printval.call(objS,3,4);//(obj_name,argument1,argument2,...);

printval.apply(objS,[5,6]); // same but argument in braces..

