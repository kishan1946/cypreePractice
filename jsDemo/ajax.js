// console.log('h');
// let fetchbtn=document.getElementById('fetchbtn');
// fetchbtn.addEventListener('click',buttonClickHandler);
// function buttonClickHandler() {
//     console.log('you have clicked button');
//     const xhr=new XMLHttpRequest();
//     // xhr.open('GET', 'kishan.txt', true);
//     xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
//     xhr.getResponseHeader('content-type','application/json');
//     xhr.onprogress =function(){
//         console.log('on progress');
//     }
//     xhr.onreadystatechange=function(){
//         console.log('ready state is ',xhr.readyState);
//     }
//     xhr.onload =function(){
//         if(this.status===200){
//             console.log(this.responseText); 
//         }else
//             console.log('some error occured');
//     }
//     params=`{
//         "name":"testing1",
//         "salary":"972872",
//         "age":"25"
//     }`;
//     xhr.send(params);
// }

/*** callback */
// const students=[
//     {"name":"kishan","subject":"javascript"},
//     {"name":"abhinav","subject":"java"}
// ]
// function enrollStudent(student,callback) {
//     setTimeout(function() {
//         students.push(student);
//         console.log('student has been enrolled');
//         callback();
//     }, 3000);
// }
// function getStudents() {
//     setTimeout(function() {
//         let str="";
//         students.forEach(function(student){
//             str+=`<li> ${student.name} ${student.subject}</li>`
//         });
//         document.getElementById('students').innerHTML=str;
//         console.log('students have been fetched');
//     }, 1000);
// }
// let newStudent={"name":"sourabh","subject":"python"};
// enrollStudent(newStudent,getStudents);
// // getStudents();

/** promise */
// function promises() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = true;
//             if (!error) {
//                 console.log('Your promises has been resolved');
//                 resolve();
//             } else {
//                 console.log('Your promises has not been resolved');
//                 reject('sorry not fullfilled');
//             }
//         }, 2000);
//     })
// }
// promises().then(function(){
//     console.log('kishan: thanks for resolving');
// }).catch(function(error){
//     console.log('kishan: very bad bro. Reason: '+error);
// })


// const students=[
//     {"name":"kishan","subject":"javascript"},
//     {"name":"abhinav","subject":"java"}
// ]
// function enrollStudent(student) {
//     return new Promise(function(resolve,reject){
//         setTimeout(function() {
//             students.push(student);
//             console.log('student has been enrolled');
//             const error=false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject();
//             }
//         }, 1000);
//     });
// }
// function getStudents() {
//     setTimeout(function() {
//         let str="";
//         students.forEach(function(student){
//             str+=`<li> ${student.name} ${student.subject}</li>`
//         });
//         document.getElementById('students').innerHTML=str;
//         console.log('students have been fetched');
//     }, 3000);
// }
// let newStudent={"name":"sourabh","subject":"python"};
// enrollStudent(newStudent).then(getStudents).catch(function(){
//     console.log('some erro occured');
// });
// // getStudents();

/** arrow function */
// function fun1() {
//     console.log('Hey! I called fun1');
//     return "Good Morning";
// }
// or
// const fun1=function(){
//     console.log('Hey! I called fun1');
//     return "Good Morning";
// }
// or
// const fun1=()=>{
//     console.log('Hey! I called fun1');
//     "Good Morning";
// }
// const fun1=()=> "Good Morning";
// const fun1=()=>({"name":"kishan"});
// const fun1=name=>"Good morning "+name;
// const fun1=(name,ending)=>"Good morning "+name+' '+ending;
// console.log(fun1('kishan','bye'));


/*** Fetch api */
// function getData() {
//     url="kishan.txt";
//     fetch(url).then((response)=>{
//         return response.text();
//     }).then((data)=>{
//         console.log(data);
//     })
// }

// function getData() {
//     url="https://api.github.com/users";
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// }

// function postData() {
//     url="https://dummy.restapiexample.com/api/v1/create";
//     data = `{"name":"kumar123","salary":"87686","age":"23"}`
//     para={
//         method:'post',
//         body: data
//     }
//     fetch(url,para).then(response=>response.json())
//     .then(data=>console.log(data))
// }

// getData();
// postData();
