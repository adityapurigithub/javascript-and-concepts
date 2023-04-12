

setInterval(()=>{
let date=new Date();
let H=date.getHours();
let M=date.getMinutes();
let S=date.getSeconds();

let AM_PM="AM";

    if(H>12){
        AM_PM="PM"
    }
    
    console.log("time is..."+H+":"+M+":"+S+AM_PM)
},1000)