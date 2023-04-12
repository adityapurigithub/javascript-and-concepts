var a=10;
// function outer(){
//     var b=40;
//     console.log(b);
// }
// console.log(a);
// outer();
// console.log(b);

function outer(){
    var a=100;
    var b=40;
    console.log('outer',a,b);
    function inner(){
        var a=20;
        var b=30;
        console.log('inner',a,b);
    }
            inner();

}
outer();
console.log('GLOBAL',a)
