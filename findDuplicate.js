var a=[1,2,3,1,3,4,2];
console.log(a.length);
function findDuplicate(a){
for (let i = 0; i <a.length-1 ; i++) {
    for (let j = i+1; j <a.length ; j++) {
        if(a[i]==a[j]){
            console.log(a[i]);
        }
}
}
}
findDuplicate(a);