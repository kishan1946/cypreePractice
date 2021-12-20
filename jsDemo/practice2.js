/*** Manipulating website */
// let a=window;
// window.alert("hello kishan");
// alert("Hey I'm here");
// a=prompt("Enter your name");
// console.log(a);
// a=confirm("are you sure!");
// a=window.innerHeight;//hight of the window
// a=innerWidth; //width of the window
// a=scrollX; //scroll value in x axis
// a=scrollY; //scroll value in y axis
// a=location;
// a=location.reload();
// a=location.href="https://www.google.com";
// a=location.toString();
// a=history;
// a=history.back();
// a=history.forward();
// console.log(a);

/***understanding dom & creating a website layout */
// let a=document;
// a=document.body;
// a=document.all;
// a=document.forms;
// Array.from(a).forEach(function(elements) {
//     console.log(elements);
// })
// a=document.links;
// a=document.links;
// let str=".com";
// Array.from(a).forEach(function (elements) {
//     if(elements.href.includes(str))
//     console.log(elements.href);
// })
// console.log(a);

/***HTML element selector */
// let element=document.getElementById("myFirst");
// element=document.getElementsByClassName("child red");
// element.childNodes;
// element.className;
// element.parentNode;
// element.style.color='red';
// element.innerText='Hey this is kishan';
// console.log(element)
// let sel=document.querySelector('#myFirst');
// sel=document.querySelector('.child');
// sel=document.querySelector('div');
// console.log(sel);
// let ele=document.getElementsByClassName('child');
// ele=document.getElementsByClassName('container');
// ele=document.getElementsByTagName('div');
// console.log(ele);
// let cont=document.querySelector('div.container');
// console.log(cont.childNodes);
// let elem=document.createElement('li');

// elem.className='childul';
// elem.id='createLi';
// elem.setAttribute('title','create li');
// elem.innerText='<b> hello this is created by kishan</b>'; //for text 
// elem.innerHTML=='<b> hello this is created by kishan</b>';  // for bold line use html text
// let text=document.createTextNode(`I'm a text node`);
// elem.appendChild(text);
// let eleme=document.querySelector('div.container');
// eleme.appendChild(elem);
// console.log(elem);
// console.log(eleme);
// let elem2=document.createElement('h3');
// let textnode=document.createTextNode('this is text node for elem2');
// elem2.appendChild(textnode);
// elem.replaceWith(elem2);
// let container=document.getElementById('contain');
// console.log(container);
// container.removeChild(document.getElementById('myFirst'));
// let pr=container.getAttribute('id');
// pr=container.hasAttribute('class');
// container.removeAttribute('id');
// container.setAttribute('id','container')
// console.log(pr);
// console.log(container);

/*** Events & Events Object */
// document.getElementById('heading').addEventListener(/***'click'*/'mouseover',function(e) {
//     let vari =e.target;
//     vari =e.target.className;
//     vari =e.target.classList;
//     vari =e.target.id;
//     vari=e.offsetX;
//     vari=e.offsetY;
//     console.log('you have clicked heading');
//     console.log(e);
//     console.log(vari);
//     // location.href='//google.com';
// });
// let btn=document.getElementById('btn');
// btn.addEventListener('click',func1);
// function func1(e) {
//     console.log(e);
// }
// document.querySelector('.container').addEventListener('mouseenter',function (e) {
//     console.log('you enter container');
//     // console.log(e);
// })
// document.querySelector('.container').addEventListener('mouseleave',function (e) {
//     console.log('you exit container');
//     // console.log(e);
// })
// document.querySelector('.container').addEventListener('mousemove',function (e) {
//     console.log('you triggered mouse move container');
//     document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetX},${e.offsetY})`;
//     // console.log(e.offsetX);
// })

/*** local storage & session storage */
// localStorage.setItem('name','kishan');
// localStorage.setItem('name2','prince');
// console.log(localStorage.getItem('name'),localStorage.getItem('name2'));
// localStorage.removeItem('name2');
// console.log(localStorage.getItem('name'),localStorage.getItem('name2'));
// localStorage.clear();
// console.log(localStorage.getItem('name'),localStorage.getItem('name2'));
// let array=['kishan','prince','rahul'];
// localStorage.setItem('array',JSON.stringify(array));
// console.log(JSON.parse(localStorage.getItem('array')));


// sessionStorage.setItem('name','kishan');
// sessionStorage.setItem('name2','prince');
// console.log(sessionStorage.getItem('name'),sessionStorage.getItem('name2'));
// sessionStorage.removeItem('name2');
// console.log(sessionStorage.getItem('name'),sessionStorage.getItem('name2'));
// // sessionStorage.clear();
// console.log(sessionStorage.getItem('name'),sessionStorage.getItem('name2'));
// let array1=['kishan','prince','rahul'];
// sessionStorage.setItem('array',JSON.stringify(array1));
// console.log(JSON.parse(sessionStorage.getItem('array')));

/*** math object */
// let x=6;
// let y=8;
// let z=Math.PI;
// z=Math.ceil(5.6);
// z=Math.round(5.4);
// z=Math.floor(5.8);
// z=Math.abs(-5.8);
// z=100*Math.random();//0-100
// z=Math.random();//0-1
// z=50+(100-50)*Math.random();
// console.log(z);

/*** Date & Time Object */
// let today=new Date;
// today=new Date('08-05-1998');
// console.log(today.getDate());
// today.setDate('8');
// console.log(today);

/***  */

