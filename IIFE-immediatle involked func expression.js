var a=10;
function print(){   // normal func to print.
    console.log('normal a',a);
}
print();

// this is iife..
(function(){
    console.log('iife a',a);
})();