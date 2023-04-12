var mul=function(x,y){
    return x*y;
}
mul(5,6);

//using arrow function...it make us wrte less ine of code..

var multiply=(x,y) => x*y;
console.log('using arrow..func..',multiply(4,5));


//BINDING ARROW FUNCTION....

function person(name){
    this.name=name;
    
    setTimeout(function(){
        console.log(this);
        console.log(name);
    },1000);

    console.log(this);
}
var p= person('ADITYA');

function person1(name){
    this.name=name;
    setTimeout(()=> console.log(this),1000);
}
var p2=person1('Puri');

/*
MDN DOCS FOR MORE INFO..ABOUT ARROW FUNCTION..*/