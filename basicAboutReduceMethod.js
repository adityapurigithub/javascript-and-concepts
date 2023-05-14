// sum/multiplication of array

const a=[1,2,3,4];

const sum=a.reduce((nums,num)=>nums+num);
console.log(sum);

const mul=a.reduce((nums,num)=>nums*num);
console.log(mul);



// count occurence
const a1=[1,2,2,2,3,5,6,6];

const ans={};
const count=a1.reduce((nums,num)=>{
    if(num in nums){
        ans[num]+=1;
    }else{
        ans[num]=1;
    }
    return ans;
},{});
console.log(count);

