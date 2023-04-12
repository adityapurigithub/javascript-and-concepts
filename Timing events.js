
function sayHello(){
    console.log('HELLO');
}
//Timing events..

/*setTimeout(function-name,timer/interval)...
timer or interval=1000 means 1sec, 2000 means 2sec..and so on*/
// setTimeout(sayHello,3000); //will print after 3sec..

/*setInterval function is used to particularly doing tasks repetitively
 after a given interval of time...*/
// setInterval(sayHello,2000);//will print after every 2sec..

/* clearInterval() function is used to clear the Interval ie set.. */
/*var sec=1;
function sayHello1(){
    console.log('after '+ sec +' sec');
    sec++;
    if(sec==5){
        clearInterval(id); 
    }

}
var id=setInterval(sayHello1,2000); 
/*for clearInterval()..we will..
  pass the id as a parameter and at 5th sec it will stop.. */

  
//Stop watch or countdown timer....
  var start=10;
  function stopWatch(){
      console.log(start);
      start--;
      if(start==0){
          console.log('Times Up!!!')
          clearInterval(idInterval);
          return;
      }
  }
  var idInterval=setInterval(stopWatch,1000);