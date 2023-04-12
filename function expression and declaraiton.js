//function expression..
// assigning a function to a variable and using the 
//variable to access the function is termed as function expresion.

var f=function fact(n){ // this is called as function expression..
    var ans=1;
    for(var i=1;i<=n;i++){
        ans*=i;
    }
    return ans;
};

// console.log(f); 

// console.log(f(5));

//console.log(fact(5)); //cant be used outside the variable..

var factRec=function fact(n){ //above function using recursion..
    if(n==0){
        return 1;
    }
    return n*fact(n-1);
};
console.log(factRec(4));

var f2=function (n){ // this is ANONYMOUS funtion..
    var ans=1;
    for(var i=1;i<=n;i++){
        ans*=i;
    }
    return ans;
};
// console.log(f2);

// function as argumnet...

var f=function fact(n){
    var ans=1;
    for(var i=1;i<=n;i++){
        ans*=i;
    }
    return ans;
}
function ncr(n,r,f){
    return f(n)/(f(r) *f(n-r));
}
console.log(ncr(5,2,f));