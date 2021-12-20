/*console.time('my code took');
console.log("hello");
console.log(2+3);
console.log([1,2,3,4]);
console.log({
    kishan:'this',
    marks:75
});
console.table({
    kishan:'this',
    marks:75
});
// console.clear();
console.timeEnd('my code took');
console.assert(56<189,'age greater');
console.error('this is error');*/

// var name="kishan";
// var channel;
// // channel="my channel";
// var marks=34;
// console.log(name,channel,marks);
// const names="kishan";
// // names=kumar;
// console.log(names)
// const arr1=[1,2,3,4];
// arr1.push(5);
// console.log(arr1);
// console.log("my name is "+name);
// console.log("data type is "+(typeof name));
// console.log("data type is "+(typeof marks));
// var city="purnia";
// {
//     let city="kolkata";
//     console.log(city);
// }
// console.log(city);
// let stMarks = {
//     kishan:89,
//     subham:78,
//     prince:87
// }
// console.log(stMarks);
// console.log("type of marks "+(typeof stMarks));

/**  type conversion **/
// let myVar;
// myVar=String(34);
// console.log(myVar,myVar.length,(typeof myVar));
// let date= new Date();
// console.log(date,(typeof date));
// let arr=[1,2,3,4,5];
// let arr1=String(arr);
// console.log(arr,arr.length,(typeof arr));
// console.log(arr1,arr1.length,(typeof arr1));
// let i=8;
// console.log(i,i.toString());
// let num="1234.098";
// console.log(Number(num),parseInt(num),Number(num).toFixed(),Number(num).toFixed(1));
// let bool=true;
// console.log(Number(bool));

/*** String properties and template */
// let greeting='good morning';
// let name='kishan';
// console.log(greeting+" "+name);
// console.log(greeting[3],greeting.indexOf("o"),greeting.charAt(2),greeting.substring(1,5),greeting.slice(-3),greeting.replace("o","i"));
// console.log(greeting.split(" "));
// let fruit1="Orange";
// let fruit2="Apple";
// let myHtml=`Hello ${name} 
//             <p>You like ${fruit1} and ${fruit2}. </p>
// `;
// document.body.innerHTML=myHtml;
// console.log(myHtml)

/***Arrays and objects */
// let marks=[24,76,89,67,54];
// let fruits=["Apple","Orange","Mango","Guava","Watermellon"];
// let mixed=["str",89,[3,6]];
// let arr=new Array(2,"kishan",89);
// console.log(marks,Array.isArray(marks));
// console.log(fruits);
// console.log(arr);
// console.log(mixed,mixed.length);
// arr[1]="prince";
// console.log(arr);
// let arrElement=arr[2];
// console.log(arrElement);
// let indexValue=marks.indexOf(arrElement);
// console.log(indexValue);
// marks.push(68);
// marks.unshift(46);
// console.log(marks);
// marks.pop();
// console.log(marks);
// marks.shift();
// console.log(marks);
// marks.push(56);
// marks.push(38);
// console.log(marks);
// marks.splice(1,3);
// console.log(marks)
// console.log(marks.reverse());
// let marks2=[89,98,77,86];
// marks=marks.concat(marks2);
// console.log(marks);
// let myObj={
//     name:"Kishan",
//     channel:"My channel",
//     isActive:true
// }
// console.log(myObj)
// console.log(myObj.name);
// console.log(myObj.isActive);
// console.log(myObj["channel"]);

/***If Else conditional statement and switch case */
// let age=18;
// if(age===19){
//     console.log("type is same and age is 19");
// }else if(age==19){
//     console.log("age is 19");
// }else if(age>18){
//     console.log("age is more than 18");
// }else{
//     console.log("age is less than 18");
// }
// console.log(age==19?"age is 19":"age is not 19");
// switch (age) {
//     case 18:
//         console.log("age is 18");
//         break;
//     case 19:
//         console.log("age is 19");
//         break;
//     default:
//         break;
// }

/***for , while & do while loop */
// for(let i=0;i<5;i++){
//     console.log(i);
// }
// let i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }
// let arr=[1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     const element=arr[i];
//     console.log(element);
// }
// arr.forEach(function(element,index,array) {
//     console.log(element,index,array);
// })
// let obj ={
//     name:"kishan",
//     job:"sdet",
//     company:"testvagrant",
//     project:"falabella"
// }
// for(let key in obj){
//     console.log(`the ${key} of object is ${obj[key]}`);
// }

/***function  */
// function greet(name) {
//     let str=`hii ${name} how are you`;
//     return str;
// }
// const mygreet=function(name) {
//     let str=`hii ${name} how are you`;
//     return str;
// }
// let obj ={
//         name:"kishan",
//         job:"sdet",
//         company:"testvagrant",
//         project:"falabella",
//         mygreet:function(name) {
//             let str=`hii ${name} how are you`;
//             return str;
//         }
//     }
// let name1="kishan";
// let name2="prince";
// console.log(greet(name1));
// console.log(mygreet(name2));
// console.log(obj.mygreet(name1));
// let i=9;
// function vari() {
//     let i=234;
//     console.log(i);
// }
// vari();
// console.log(i);


