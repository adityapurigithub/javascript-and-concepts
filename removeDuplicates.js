var a=[1,2,3,2,1,4,1,2,3,5];
var ans=[];
a.forEach((a)=>
    !ans.includes(a) && ans.push(a));


console.log(ans);