let n=30;

//print prime no ...

for (let i = 1; i<=n; i++) {
    let prime;
    for(let j=2;j<i;j++){
        prime=true;
        if(i%j==0){
            prime=false;
            break;
        }
    }
    if(prime){
        console.log(i);
    }
    
    
}
