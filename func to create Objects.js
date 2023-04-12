var student1={
    'name':"Aditya",
    marks:200,
    rollno:1
};
console.log(student1.name);
console.log(student1.marks);

//is we want to create objects of 100s student than we need function
function createStudent(name,rollno,marks){
    var student={};
    student.name=name;
    student.rollno=rollno;
    student.marks=marks;
    return student;
}
var st1=createStudent('lilW',1,44);

var st2=createStudent('wiz',2,77);

var st3=createStudent('snoop',3,99);

st1;