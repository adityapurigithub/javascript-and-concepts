
function reverseEachWord(string) {
    let ar=string.split(' ');
    console.log(ar);
    
    let ansArr=[];
    
    for (let a of ar) {
        // console.log(a);

        let rev="";
        for (let i = 0; i < a.length; i++){
            rev=a.charAt(i)+rev;
        }
        // console.log(rev);
        ansArr.push(rev);
        // console.log(ansArr);

        let ans=ansArr.join(' ');
        console.log(ans);
    }
}

var string = "Welcome to this Javascript Guide!";

reverseEachWord(string);