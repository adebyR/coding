//alert(" 1 2 3")

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
    // firstname:"kev",
    // lastname:"root",
// }
// console.log(typeof names)

// var v
// console.log(typeof v)
// const p=1
// console.log(typeof p)

//  var t=function name(params) {
    
// }
// console.log(typeof t)

 var n= "firstname"
var m="lastname is"
// //console.log(n+m)
// n.concat(m)
// //console.log(n.concat(m))
// //alert(`${n}+${m}=${n+m}`)
// //console.log(n+m)
// //alert(`${n.concat(m)}`)
// n.toString(m)
// console.log(typeof n.toString(m))
// console.log(`${n}${m}`)
 console.log(m.split(' ') )
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
    // return value%2!== 0

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
// //         name:"kaliza",
// //         age:45
// //     },
// //     {
// //         name:"muhizi",
// //         age:40
// //     }
// // ]
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
// //     let tempArr=str.split('')
// //     let letter=[];
// //     let count=1;
    
// //     for(let i=0; i<tempArr.length;i++)
// //     if(tempArr[i]=== tempArr[i+1]){
// //         count++;
// //     }
// //     else{
// //         let value =`${tempArr},${count}`;
// //         letter= [...value,letter];
// //         count=1
// //     }

// // return count;
//     const i="index";
//     const o="value";
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

function math (a,b,act){
    if(act ==="+"){
        return(a+b)
    }
    else if(act==="-"){
        return(a-b)
    }
    else if(act==="*"){
        return(a*b)
    }
    else if(act==="/"){
        return (a/b)
    }
    
}
const input1=prompt("input first number")
const input2=prompt("input second number")
console.log(`${input1}+${input2}=`,math( parseInt(input1),parseInt(input2),"+"))
console.log(`${input1}-${input2}=`,math(parseInt(input1),parseInt(input2),"-"))
console.log(`${input1}*${input2}=`,math(parseInt(input1),parseInt(input2),"*"))
console.log(`${input1}/${input2}=`,math(parseInt(input1),parseInt(input2),"/"))





























