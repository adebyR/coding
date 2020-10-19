// const { publicDecrypt } = require("crypto")
// //alert(" 1 2 3")

// const { truncate } = require("fs")

// const { request } = require("express")



// var a= prompt("how old are you")
// console.log(a);

// var b=confirm("continue?" )
// console.log(b )
// console.log(typeof b)
// console.log(typeof b.toString())


// const c=1
// const d=6
// let e=5
// var k= 11

// console.log(typeof c.toString())
// alert(`${c}+${d}+${k}+${e}=${c+d+k+e}`)
// console.log(c+d+k+e)
// const names={
//     firstname:"kev",
//     lastname:"root",
// }
// console.log(typeof names)

// var v
// console.log(typeof v)
// const p=1
// console.log(typeof p)

//  var t=function name(params) {
    
// }
// console.log(typeof t)

//  var n= "firstname"
// var m="lastname is"
// console.log(n+m)
// n.concat(m)
// console.log(n.concat(m))
// alert(`${n}+${m}=${n+m}`)
// console.log(n+m)
// //alert(`${n.concat(m)}`)
// n.toString(m)
// console.log(typeof n.toString(m))
// console.log(`${n}${m}`)
//  console.log(m.split(' ') )
// const u=m.split('-') .reverse() .join("")
// console.log(u.split('') .reverse() .join(""))
// console.log(n.slice(0,5))
// console.log(n.slice(0,1))
// const l=n.slice(0,1)
// console.log(l.toUpperCase())
// const s=n.substring(1)
// console.log(l.toUpperCase()+s)

// const h="     good morning   "
// console.log(h)
// const g= h.trim()
// console.log(g)

// const numbers=[1,2,3,4,5,6,7,8,9,10,9]
// console.log(numbers.indexOf(9))
// console.log(numbers.lastIndexOf(9))
// console.log(numbers.filter((value,index)=>{
//     return value%2!== 0

// }))

// split
// join
// filter 

// let sentence=" hello how is everything going with you? ";
// let words=sentence.split(' ');
// console.log(words)
// let k= words.join('')
// console.log(k)
// console.log(words.filter((value,index)=>{
//     return value;
// }))


// const users=[
//     {
//         name:"kalisa",
//         age:25
//     },
//     {
//         name:"muhanga",
//         age:30
//     },
//     {
//         name:"kalisa",
//         age:45
//     },
//     {
//         name:"muhizi",
//         age:40
//     }
// ]
// console.log(users.find((value,index)=>{
//     return value.name==="kalisa"
// }))
// console.log(users.filter((value,index)=>{
//     return value.name==="kalisa" && value.age<30
// }))
// var w="have a nice day"
// localStorage.setItem("key",w)
// const g=localStorage.getItem("key")
// console.log(g)




// // console.log(users.filter((value,index)=>{
// //     return value.age<30
// // }))

// // var t=1
// // if(t){
// // alert ('hey its 1')
// // }
// // else{
// // console.log("its not 1")
// // }
// // t=1? alert('its 1') : console.log('its not 1')
// // var step=1
// // const data={}
// // switch (step) {
// //     case 1: 
// //         var l=prompt("what is your name")
// //         data.names=l
// //         step=2
// //     case 2:
// //         var age =prompt('enter your age')
// //         data.age=age
// //         step=3
// //     case 3:
// //         var address=prompt("enter your address")
// //         data.address=address
// //     case 4:
// //         var number=prompt("enter your phone number")
// //         data.number=number
// //     default:
// //         break;
// // }

// // console.log(data)

// // const  obj={
// //     0:"value 0",
// //     1:"value 1"
// // } // return [value 0, value 1] // return [0,1]

// // console.log(Object.values(obj))
// // console.log(Object.keys(obj))

// // const num=[1,4,5,23,3,8,19,9,0,6,7,12,25]
// // console.log(num.sort((a,b)=>a-b))

// // const alp=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
// // console.log(alp.sort())
// // console.log(alp.sort((a,b)=> b.localeCompare(a)))

// function calculator (x,r,action) {

//    if(action==="+"){

//     return(x+r)
//    }
//    else if (action==="-"){
//        return(x-r)
//    }
//    else if( action==="*"){
//    return(x*r)
//    }
//    else if (action==="/"){
//        return(x/r)
//    }
 
// }
// var number1=prompt("enter number 1")
// var number2=prompt("enter number 2")

// console.log(`${number1}+${number2}`,calculator(parseInt(number1),parseInt(number2),"+"))
// console.log(calculator(number1,number2,"-"))
// console.log(calculator(number1,number2,"*"))
// console.log(calculator(number1,number2,"/"))



// function countletter(data){
// // //     let tempArr=str.split('')
// // //     let letter=[];
// // //     let count=1;
    
// // //     for(let i=0; i<tempArr.length;i++)
// // //     if(tempArr[i]=== tempArr[i+1]){
// // //         count++;
// // //     }
// // //     else{
// // //         let value =`${tempArr},${count}`;
// // //         letter= [...value,letter];
// // //         count=1
// // //     }

// // // return count;
// //     const i="index";
// //     const o="value";
//     const info={}
//     for (let index = 0; index < data.length; index++) {
//        if(info[data[index]]){ 
//            info[data[index]]+=1
//        }else{
//            info[data[index]]=1
//        }
//     }
    
//     const res = Object.values(info).sort((a,b)=>b-a);
//     const highestValue=res[0]
//     const key= Object.keys(info).filter((char)=>info[char]===highestValue)
//     console.log(`${i}:${key[0]}\n${o}:${highestValue}`)
// }
    
   

// const str ="this is information"   
// console.log(countletter(str))



// // // return {t:2,h:1,i:4,s:2,n:2,f:1,o:2,r:1,m:1} ===>>> [i,4]
// // // Hint: use for loop, object, array,
// // const examp=[
// //     {
// //         alphabet:"[t,2]",
// //         numb:2

// //     },
// //     {
// //         alphabet:"[h,1]",
// //         numb:1
// //     },
// //     {
// //         alphabet:"[i,4]",
// //         numb:4
// //     },
// //     {
// //         alphabet:"[s,2]",
// //         numb: 2
// //     },
// //     {
// //         alphabet:"[n,2]",
// //         numb: 2
// //     },
// //     {
// //         alphabet:"[f,1]",
// //         numb: 1
// //     },
// //     {
// //         alphabet:"[o,2]",
// //         numb: 2
// //     },
// //     {
// //         alphabet:"[r,1]",
// //         numb: 1
// //     },
// //     {
// //         alphabet:"[m,1]",
// //         numb: 1
// //     }
// // ]
// // console.log(examp.filter((value,index)=>{
// //     return value.numb>=4
// // }))
// // console.log(Object.keys(examp))
// // console.log(Object.values(examp))

// // const examp1={
    
// //     t:'t,2',
// //     h:'h,1',
// //     i:'i,4',
// //     s:'s,2',
// //     n:'n,2',
// //     f:'f,1',
// //     o:'o,2',
// //     r:'r,1',
// //     m:'m,1' 
// // }
// // console.log(Object.keys(examp1))
// // console.log(Object.values(examp1))



// const data=[
//     {
//         name:"james",
//         age:40
//     },
//     {
//         name:"muhire",
//         age:44
//     },
//     {
//         name:"king",
//         age:22
//     },
//     {
//         name:"anthony",
//         age:12
//     },
//     {
//         name:"john",
//         age:5
//     }
// ]

// // write a function that will return an array of data where age is less than 40
// // write a function that will return an array where each user's name start with capital "j"
// function fdff(data){

// return data.filter((value,index)=>{
//     return value.age<40
// })
// }
// console.log(fdff(data))


// function uoijoi(data){
//     return data.filter((value,index)=>{
//         return value.name[0]==="j"
//     })
// }
// console.log(uoijoi(data))

// function math (a,b,act){
//     if(act ==="+"){
//         return(a+b)
//     }
//     else if(act==="-"){
//         return(a-b)
//     }
//     else if(act==="*"){
//         return(a*b)
//     }
//     else if(act==="/"){
//         return (a/b)
//     }
    
// }
// const input1=prompt("input first number")
// const input2=prompt("input second number")
// console.log(`${input1}+${input2}=`,math( parseInt(input1),parseInt(input2),"+"))
// console.log(`${input1}-${input2}=`,math(parseInt(input1),parseInt(input2),"-"))
// console.log(`${input1}*${input2}=`,math(parseInt(input1),parseInt(input2),"*"))
// console.log(`${input1}/${input2}=`,math(parseInt(input1),parseInt(input2),"/"))

// const str ="there is no way" 

// function countLetter(str){
//     const info={}
//     for (let index = 0; index < str.length; index++) {
//        if (info[str[index]]) {
//            info[str[index]]+=1
//        }
//        else{
//            info[str[index]]=1
//        }
        
//     }
//     const ans= Object.value(info).sort((a,b)=>a-b);
//     const value= ans[0]
//     console.leg(value[0])
    
// }
// const a=[1,2,3,4,5,6,7,8,9,9]
// console.log(a.reduce((a,b)=>{
//     return (a+b)

// },0))

// const b=[1,2,3]
// const c=b.map((a,b)=>{
//     return(a*3)
// })
// console.log(c)
// b.forEach((value,index) => {
//     b[index]=value*3
// });

// console.log(b)
// let i=0
// let sum=0
// while (i<b.length) {
//     sum=sum+b[i]
//     i=i+1
// }
// console.log(sum)

// const triangle = [3,4,5]

// function area([length,height]){
//     return (length*height)/2
// }

// console.log(area(triangle))


// const arr =[1,2,3,1,3,4,5,1,10,8,9,5]
// const a= arr.filter((c,b,d) =>{
//     return d.indexOf(c)===b
// })
// console.log(a.sort((a,b)=>b-a))
// const info = [...new Set(arr)].sort((a,b)=>a-b)
// console.log(info)

// const q=arr.sort((a,b)=>a-b)
// console.log(q)
// const c=q[0],k= q[arr.length-1]    //accessing first element in the array, and the last one
// console.log(c,k)


/**
 * write a function that will check if the number is a palindrome number or not
 * a palindrome number is a number, word that should re-written the same backward as the forward
 * for example: 121 // this is a palindrome therefore the function should return true
 *              122 // this is not a palindrome, so function should return false
 * 
 */
//  function isPalindrome(num) {
    //  const data={}
    //  for (let index = 0; index <num.length; index++) {
    //     if([num[index]]){ 
    //     num=== num.split("").reverse().join("")
    //     return("isPalindrome")
    //     }
    //     else{
    //         num!==num.split("").reverse().join("")
    //     return ("isnotPalindrome")
    //     }
            

    // }
    // const number = num.toString().split("").reverse().join("")
    // parseInt(number)===num?true:false
//     if(parseInt(number)===num){
//         return true
//     }else{
//         return false
//     }
                    
//  }

 
// function nextPalindrome(numbr){
    // const nextNumber={}
    // const v=numbr.toString().split("").join("")
    // for (let index = 0; index < v.length; index++) {
    //     nextNumber[v[index]]=

        
    // if (parseInt(v)===numbr) {
    //     return 
        
    // }

    // var nextNumber=numbr+1
    // while (!isPalindrome(nextNumber)) {
    //     nextNumber+=1
    // }

//     for (let index = 0; !isPalindrome(nextNumber); index++) {
//         nextNumber+=1
//     }

//     return nextNumber

// }
//  console.log(isPalindrome(121)) // should return true
//  console.log(nextPalindrome(121)) //shoul return 131
//  console.log(isPalindrome(1444)) // should return false
//  console.log(nextPalindrome(1444)) //shoul return 
 

// const express=require("express")
// const dotenv=require("dotenv")

// dotenv= config()
// const app= express()

// console.log(process.env)
// app.use("/",(request,response)=>{
//     const data={
//         password:request.body.password,
//         email:request.body.email
//     }
//     response.json({message:"hello world"})
// })
// const Port=process.env.Port || 3000
// app.listen(Port,function(){console.log(`hi there${Port}`)}) 


// array.push= insert data into an array at the last index
// array.pop= remove the last data in the array
// array.shift= remove the first data in the array
// array.unshift=insert data into an array at the first index


// get= get info from the servel
// post= creat n save info to your server
// put = update info from server
// delete = delete info from the server
// patch= update a porshion on the server


// const express = require("express");
// const dotenv = require("dotenv");
// const bcryt = require("bcryptjs");

// dotenv.config();

// const app = express();
// app.use(express.urlencoded({ extended: false }));
// // app.use(express.json())
// const creat = [];
// // console.log(process.env)
// app.get("/", (request, response) => {
//   response.send({ message: "welcome to our api together" });
// });

// app.post("/creat-account", (request, response) => {
//       const data = {
//         id: creat.length+1,
//         firstname: request.body.firstname,
//         lastname: request.body.lastname,
//         address: request.body.address,
//         nationality: request.body.nationality,
//         phoneNumber: request.body.phoneNumber,
//         IdNumber: request.body.IdNumber,
//         email: request.body.email,
//         status:request.body.status,
//         fundsAvailable: request.body.funds-available,
//         createdOn:request.body.createdOn

        
//       };

//       const matchedData = creat.find((value, index) => {
//         return value.lastname === data.lastname && value.firstname === data.firstname && value.phoneNumber === value.phoneNumber
//         && value.IdNumber === value.IdNumber;
//       });

//       if (matchedData) {
//         return response.send({ message: "account already created" });
//       }
    
//       users.get(data);


//   response.json({ message: "you have successfuly created an account" });
// });

// status
// available fund
// created on 
// account Number
// id Number
// function isPalindrum(word) {
//   const t= word.split("").reverse().join("")
//   return t.toString()===word.toString()?true:false
  
// }
// console.log(isPalindrum("madamj"))

// const number=[1,2,3,4,5,6,7,8]
// function oddsNumber(arr){
//   return arr.filter((value,index)=>{
//     return value%2===1
//   })
// }

// console.log(oddsNumber(number))


function countCharacter(word){
  const info={}
  for (let index = 0; index < word.length; index++) { 
  if(info[word[index]]){
    info[word[index]]+=1
  }else{
    info[word[index]]=1
  }
}
return info
  
}
const w="this is kigali"
console.log(countCharacter(w))

// const arr =[1,2,3]
// console.log(amazina);
// console.log(amazina['firstname']) // muhabura
// amazina['places']="gisozi"

// console.log(amazina)
// console.log(arr[0]); //1
httrack