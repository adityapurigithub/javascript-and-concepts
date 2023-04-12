function createStudent(name,rollno,marks){
//     var student={};
    this.name=name;
    this.rollno=rollno;
    this.marks=marks;
//     return student;
}
var st1=new createStudent('lilWaynn',1,44);

var st2=new createStudent('wiz',2,77);

var st3=new createStudent('snoop',3,99);
//using new keyword means that we are calling this function as 
// a consturctor if we not use new keyword then it will be called 
// like a normal function...

st1;
