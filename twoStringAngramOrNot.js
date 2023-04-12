var first="army";
var second="Mary";

// op->true...

const isAnagram=(first,second)=>{
    var a=first.toLowerCase();
    var b=second.toLowerCase();

    //convert to array and sort arr..
    a=a.split('').sort();
    b=b.split('').sort();

    //convert sorted str back to arr...

    a=a.join('');
    b=b.join('');
    
    console.log(a,b);

    return a===b;
}

let ans=isAnagram(first,second)
console.log(ans);

ans?"Anagram strings": "Not Anagram strings"
