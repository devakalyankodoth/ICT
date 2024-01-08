//JS objects
let person={
    name:'devakalyan',
    age:22,
    place:'ksd'
}
console.log(person.place)
//use new keyword in js
let car=new Object();
car.brand='hyundai';
car.model='i10';
car.color='black';
console.log(car);
//array of objects
var arr_obj=[{name:'maya',location:'kochi'},{name:'meera',location:'tvm'}]
console.log(arr_obj[1].location)
function subval(num1, num2){
    var sub = num1 - num2;
    return sub;
}
var result =subval(10,5);
console.log("the result is" + result);

function mulval(num1,num2) {
    var mul = num1 * num2;
    return mul;
}
var result = mulval(10,5);
console.log("the result is " + result);

function divval(num1,num2){
    var div = num1 / num2;
    return div;
}

var result = divval(10,5);
console.log("the result is " + result);

//looping statements
//write a program to printing the numbers from 1 to 10
for (let i = 0; i<10; i++) {
    console.log(i+1);
    
}
// for in loop
let person1={name:'joe',age:78,place:'tvm'}
for(x in person1){
    console.log(person1[x]);
}