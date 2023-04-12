//   ARRAYS   //
// this is how array is defined...
var arr1=[1,2,3,4,5];
// console.log(arr);

//another way of defining array..
var arr2=new Array(1,2,3,4,5,5,6,7,8);
console.log(arr2);
console.log(arr2.length);
 
console.log(arr2[0]);
console.log(arr2[5]);

arr2[5]=2;
console.log(arr2[5]);
console.log(arr2);

var arr3=new Array(5);//if we pass only one argument then..
console.log(arr3.length);// it will be considered as length of array.

//----funtion on array---//
var arr3=new Array("str",true,10,4);
arr3.length;
console.log(arr3);

arr3.push(33);//insert at end of arr.
console.log(arr3);

arr3.pop(); //display & remove last element..
console.log(arr3);

arr3.shift();//left shitf..
console.log(arr3);

arr3.unshift(11);//right shift and insert the element at first..
console.log(arr3);

//for more Read at MDN DOCX..//



//----SPLICE function------//
//used for some change in array like add or remove,...

/*syntax:
    arr.splice(start-index,no-of-items-to-delete,element-to-insert)
*/
var arrspl=new Array(1,2,4,6,8,99,92,12,31);
// arrspl.splice(2,2,66);
console.log(arrspl);

// arrspl.splice(1,5);
console.log(arrspl);

// arrspl.splice(0);
console.log(arrspl);

arrspl.splice(2,0,44);//insert 44 at index 2 without deleting..
console.log(arrspl);

arrspl.splice(2,3,3,4,5);//removing 3 element from index 2 and onward 
console.log(arrspl);      //and insering 3,4,5...


//---Iterating over array---//
var arr5=[1,2,3,4,1,12,4,12,4,512,4];
for(var i=0;i<arr5.length;i++){
//     console.log(arr5[i]);
}

//Iterating using for-each loop
function print(element){
    console.log(element);
}
arr5.forEach(print);  //this is the way of for-each iteration..


//Iterating using for-in loop..
  //topic of object and array..
var arrr=[1,23,12,123,55];
for (var i in arrr){  //this will gives keys/indecies ...
    console.log(i);
}