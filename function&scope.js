
function demofun(){
    var i=1;
    console.log(i);
}
demofun();
//console.log(i);.. // as a is defined in func..so its scope is
           //only inside the func and cant  be accesed globally..

/*
var a="global context";
function demofun(){
    var a="inside func";
    console.log(a);
}
demofun();
console.log(a);
*/

//...........//
function c(){
    console.log("inside c");
}
function b(){
    c();
    console.log("inside b");
}
function a(){
    b();
    console.log("inside a");
}
a();
console.log("global context");

//--Function within function-----//

function outer(){ 
    var outervar=1;
    
    function inner(){  
        var innervar=2;
        console.log(outervar);
    }
    inner();
//     console.log(innervar); //..here scope is inside inner()
}
outer();

var name="global";

function outername(){ 
    var name="outer";
    
    function innername(){  
        var name="inner";
        console.log(name);
    }
    innername();
    console.log(name);
}
outername();
console.log(name);