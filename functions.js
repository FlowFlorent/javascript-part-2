function longerString(str1, str2){
    if (str1.length > str2.length) {return 1;}
    else if (str1.length === str2.length) {return 0;}
    else {return -1;}
}


var strings = ["gerterg rege", "rgrgsdrgsgr"," sdsdfsd", "sfsddga", "sdfsdf","sdfsdf"]

console.log(strings);
console.log(strings.sort(longerString));

var person1 = {
    name: "Jack",
    email: "jack@notyourbusiness.io"
}

var person2 = {
    name: "Alexander",
    email: "alexander@thegreat.io"
}

var person3 = {
    name: "Hillary",
    email: "classified@butnotreally.ouch"
}

var persons = [person1, person2, person3];

//Name sort
function longerName(name1, name2){
    if (name1.name.length > name2.name.length) {return 1;}
    else if (name1.name.length === name2.name.length) {return 0;}
    else {return -1;}
}
console.log(persons);
persons.sort(longerName);
console.log(persons);

//Email sort
//persons.sort();
function emailAlpha(person1, person2){
    if (person1.email > person2.email) {return 1;}
    else if (person1.email === person2.email) {return 0;}
    else {return -1;}
}
console.log(persons.sort(emailAlpha));

//Map
var numberArray1 = [1 , 2, 3];
var numberArray2 = [1, 2,4, 5];

function square(num){
    return num * num;
}

console.log(numberArray1.map(square));

function squareNum(something){
    return something.num * something.num;
}

var numberObjectArray = [{num: 1}, {num: 2}, {num: 384}, {num: 12}, {num: 15}];


console.log(numberObjectArray.map(squareNum));

//Operation Maker

function operationMaker (operation) {
    if (operation === "add") {return function(num1,num2) {return num1 + num2}};
    if (operation === "subtract"){return function(num1,num2)  {return num1 - num2}};
    if (operation === "mult") {return function(num1,num2) {return num1 * num2}};
    if (operation === "div") {return function(num1,num2) {return num1 / num2}};
    return 0;
}
var adder = operationMaker("add");
console.log(adder(5, 10));