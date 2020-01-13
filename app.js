'use strict';
// 1.Read in the contents of a .json file with the contents given below
const data = require('./data');
console.log('data.json :', data);

//2.Output a list of each property of the object and it's value, separated by a colon. For example:
//name: John

let arrayData = [data];
// console.log(arrayData);
arrayData.forEach(element => {

    console.log(`name :${element.name}`);
    console.log(`pets :${element.pets}`);
    console.log(`children :zach :${element.children.zach.age}, allie:',${element.children.allie.age}`);
    console.log(`job :${element.job}`);

})

//3.Output a list (array) of all pets that start with the letter 'R'
arrayData.filter(element => {
    element.pets.filter(ele => {
        // console.log(ele);
        if (ele.charAt(0) === 'R') {
            console.log(ele);
        }

    })
})

// 4.Create a new instance of "Person" for each child, with the properties "name" and "age"

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.dogYear=age*7;
    Person.all.push(this) ;
}
Person.all =[];
// console.log(data)


let zach = new Person(Object.keys(data.children)[0], Object.values(Object.values(data.children)[0])[0]);
let allie = new Person(Object.keys(data.children)[1], Object.values(Object.values(data.children)[1])[0]);

console.log(zach, allie)
// 5. Create a method for a Person instance that outputs their age in dog years (their current age * 7)

Person.prototype.dogYears = function () {
    let dogYear = this.age * 7;
    console.log(`${this.name} :  ${dogYear} dog years`);
}
zach.dogYears();
allie.dogYears();


//6.For each Person in the children array, output their name, current age, and age in dog years

console.log(Person.all)



