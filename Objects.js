//-----------OBJECTS------//
var student={     //like in python object is like a dictionary i.e
 name:"Aditya",      //a key:value pair..
 marks:100,
 rollno:1    
};
console.log(student);
console.log(student.name);
console.log(student.marks);
student.marks=101;
console.log(student.marks);

student.college='TRAMIET';// for adding a new property in object..
console.log(student);

delete student.marks; // to delete a property..
console.log(student);


var obj={};// a empty object..
var obj1=new Object();  // an another way..


//--bracket notation--//
var obj2={
    "name":'Andy',
    '-class':8,
    age:14


};
console.log(obj2);
/*now if we want to access class then we had to use the
 bracket notation and it cant be accessed using dot notation..*/
// console.log(obj2.-class);  // it will give error..
console.log(obj2["-class"])//this is the way of bracket notation..