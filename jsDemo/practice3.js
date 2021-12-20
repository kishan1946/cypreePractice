// class car {
//     constructor(name, speed) {
//         this.name = name;
//         this.speed = speed;
//     }
// }
// function car1(name, speed) {
//     this.name = name;
//     this.speed = speed;
// }
// maruti=new car('maruti',80);
// marceedes=new car('marcedes',180);
// console.log(maruti.speed);
// console.log(marceedes.speed);
// function obj(name) {
//     this.name=name;
// }
// obj.prototype.getName=function() {
//     return this.name;
// }
// obj.prototype.setName=function(name) {
//     this.name=name;
// }
// obj2=new obj("kishan");
// console.log(obj2.getName)
// function employee(name,salary,experience) {
//     this.name=name;
//     this.salary=salary;
//     this.experience=experience;
// }
// function programmer(name,salary,experience,language) {
//     employee.call(this,name,salary,experience);
//     this.language=language;
// }
// let programe=new programmer('kishan',30800,0,'javaScript');
// console.log(programe);


/** ES6 class and objects */
// class Employee{
//     constructor(name,salary,experience){
//         this.name=name;
//         this.salary=salary;
//         this.experience=experience;
//     }
//     static add(a,b){
//         return a+b;
//     }
// }
// class Programmer extends Employee{
//     constructor(name,salary,experience,language){
//         super(name,salary,experience);
//         this.language=language;
//     }
// }

// kishan=new Programmer('kishan',30800,0,'javaScript');
// console.log(kishan);
// console.log(Programmer.add(5,6))

/** Asynchronous */
// setTimeout(() => {
//     for (let index = 0; index < 10; index++) {
//         const element = index;
//         console.log(index);
//     }
// }, 100);
// console.log('done');


/** 
 * iterator
 */
// let myArr = ['apple', 'grapes', 'orange', 'pineapple', 'banana'];
// console.log(myArr);
// function fruitsIterator(values) {
//     let nxtIndex = 0;
//     return {
//         next: function () {
//             if (nxtIndex < values.length) {
//                 return {
//                     value: values[nxtIndex++],
//                         done: false
//                 }
//             } else {
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
// }
// // using iterator
// const fruits=fruitsIterator(myArr);
// console.log(fruits.next());
// console.log(fruits.next().value,fruits.next());
// console.log(fruits.next().value);
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());


/**
 * genarator
 */
// function* numberGen() {
//     let i=0;
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }
// const gen=numberGen();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next().value,gen.next());
// console.log(gen.next().value,gen.next());
// console.log(gen.next());

/**
 * for of loop
 * for in loop
 */
let people=['kishan','abhinav','sourabh','prince','rahul'];
obj={
    name:"kishan",
    language:"javascript",

}
myString='This is my String';
// old version
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);
}
console.log('***************************************');

for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    console.log(element);
}
console.log('*');
for(let key in obj){
    console.log(obj[key],obj.name);
}
// console.log('*');
// for(let char in myString){
//     console.log(myString[char]);
// }
console.log('*');
for(let name in people){
    console.log(people[name]);
}
console.log('***************************************');

for (const iterator of people) {
    console.log(iterator)
}
console.log('*');
for (const key in people) {
    console.log(key);
}
// console.log('*');
// for (const iterator of myString) {
//     console.log(iterator)
// }
// for (const [key,value] of obj) {
//     console.log(key,value);
// }

/**
 * maps
 */
// let myMap=new Map();
// const key1='kishan',
//             key2={},
//             key3=function(){};
// // setting map value
// myMap.set(key1,'This is a String');
// myMap.set(key2,'This is a blank object');
// myMap.set(key3,'This is a empty function');
// console.log(myMap);
// // getting value from map
// console.log(myMap.size);
// let value1=myMap.get(key1);
// console.log(value1);
// value1=myMap.get(key2);
// console.log(value1);
// value1=myMap.get(key3);
// console.log(value1);
// for (const [key,value] of myMap) {
//     console.log(key,value);
// }
// console.log('*');
// for (const key of myMap.keys()) {
//     console.log(key);
// }
// console.log('*');
// for (const value of myMap.values()) {
//     console.log(value);
// }
// console.log('*');
// myMap.forEach((value, key)=>{
//     console.log(value,key);
// })
// // convert into array
// let array=new Array(myMap);
// console.log(array);

