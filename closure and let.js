for(var i=0;i<=5;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}
console.log('after the loop',i);

for(let i=0;i<=5;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}
console.log('after the loop',i);
