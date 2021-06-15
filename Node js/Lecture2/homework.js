 First example of
forEach() reference;
We get the sum of the numbers here;


var numbers = [5,10,15,20,25];
var sum = 0;

numbers.forEach(board);
function board (item){
    sum += item;
    
}
console.log("The sum of the numbers on the board is " + sum);


 Second example of
forEach() reference;
This example lists all arrays
items, with their indexes and values;


var colors = ["yellow", "green", "blue", "white", "pink"];

colors.forEach(myFunction);

function myFunction(item, index) {
  console.log(index += ":" + item); 
}

Third example, here we are multipling the value with 
10 and updateing the element value


var numbers = [1,2,3,4,5];
numbers.forEach(multiplyTen);
function multiplyTen(item, index, array){
    array[index] = item * 10;
}

console.log(numbers);


Concat Array Reference

 First example, concat two 
arrays.


var men = ["Adam", "Noah", "Paul"];
var lady = ["Eve", "Sarah"];
var persons = men.concat(lady);
console.log(persons);

Second example,
concat three arrays.


var men = ["Adam", "Noah", "Paul"];
var lady = ["Eve", "Sarah"];
var children = ["Samuel"];
var persons = men.concat(lady, children);
console.log(persons);

 Third example, concat
different arrays, string 
plus numbers.



var men = ["Adam", "Noah", "Paul"];
var lady = ["Eve", "Sarah"];
var children = [2, 1];
var persons = men[0].concat(" had " + children[0] + " childrens.");
var persons2 = lady[1].concat(" had " + children[1] + " childrens.");

console.log(persons);
console.log(persons2);


First example for slice() method 


function myFunction() {
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var keep = fruits.slice(1,-2);
    console.log(keep);
  }
myFunction();

Second example for slice() method 

var men = ["Adam", "Noah", "Paul"];
var children = [2, 1, 3];
var nameS = ["Sem", "Ham", "Jafet", "Paul"];
var persons = " Results:" + men.slice(1,-1).concat(children.slice(2).concat(nameS.slice(-4, -1)) + " childrens");

console.log(persons);


Third example for slice() method 

var men = ["Adam", "Noah", "Paul"];
var children = [2, 1, 3];
var nameS = ["Sem", "Ham", "Jafet", "Paul"];
var person1 = men.slice(1,-1);
var kid = children.slice(2);
var namesOfChildrens = nameS.slice(-4,-1); 
var result = person1 + " had " + kid + " childrens. Their names are: " + namesOfChildrens + ".";

console.log(result);

First example with 
map() reference.


var arr = [1,2,3];
var arr1 = arr.map(item =>item*0.5)
console.log(arr1);

Second example with 
map() reference.


var arr = [1,2,3,4,5];
var arr1 = arr.map(item => item**2);
console.log(arr1);


Third example with 
map() reference with degree number.


var arr = [1,2,3,4,5];
var operation = item => {
    return item**3;
}
 var arr1 = arr.map(operation);
 console.log(arr1);

First example with 
filter() reference.

var arr = [11,22,31,43,56,87,99,102];
var arr1 = arr.filter(item => item%2==1);
console.log("These numbers have a remainder of 1 : [" + arr1 + "]");

Second example with 
filter() reference.

var arr = [11,22,31,43,56,87,99,102];
var arr1 = arr.filter(item => item<=50);
console.log("These numbers have values of 50 or smaller : [" + arr1 + "]");

Third example with 
filter() reference.

var arr = [1,2,3,4,5,6,7,8,9,10];
var arr1 = arr.filter(item => item%5 !=0);
console.log("These numbers from the array haven't got remainder of '0' : [" + arr1 + "]");


 First example with 
 reduce() reference. 


 var arr = [1,2,3,4,5,6,7,8,9];
 var arr1 = arr.reduce((acumulator,value) => acumulator*value);
 console.log(arr1);


 Second example with 
 reduce() reference. 


 var arr = [10,20,30,40,50];
 var arr1 = arr.reduce((acumulator,value) => {
      return acumulator+value
 },1);
 console.log(arr1);


 Third example with 
 reduce() reference. 
 

 var arr = [1.2,2.6,3.9,4.1];
 var arr1 = arr.reduce((acumulator,value) =>{
      return acumulator + Math.round(value);
 },0);

 console.log("The sum of the integers numbers is: " +arr1);