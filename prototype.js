function Vehicle(name,price){
    this.name=name;
    this.price=price;

}


//now if we want to add some more property to vehicle...
//then we will use prototype,using prototype there will be 
//only one copy of the property shared by all objects
//prototype...fun_name.prototype.property_name=property/function(){}..
Vehicle.prototype.getPrice=function(){
    return this.price;
};
Vehicle.prototype.color='black';

var vehicle1=new Vehicle('BMW',5000000);
var vehicle2 =new Vehicle('Audi',600000);


vehicle2;

vehicle1.__proto__;

Object.getPrototypeOf(vehicle1);


vehicle1.hasOwnProperty('price');

vehicle1.hasOwnProperty('color');

vehicle1.color='white'; //this will add property in vehicle1 not in prtotype..
vehicle1.hasOwnProperty('color');// so  now it  will give true..



