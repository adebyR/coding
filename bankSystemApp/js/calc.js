
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

var input1=document.getElementById("input1")
var input2=document.getElementById("input2")
document.getElementById("ADD").addEventListener("click",(event)=>{
    const result= parseInt(input1.value) + parseInt(input2.value)
    document.getElementById("result").value= result
    input1.value=""
    input2.value=""
})
document.getElementById("SUB").addEventListener("click",(event)=>{
    const result= parseInt(input1.value) - parseInt(input2.value)
    document.getElementById("result").value= result
    input1.value=""
    input2.value=""
})
document.getElementById("MULT").addEventListener("click",(event)=>{
    const result= parseInt(input1.value) * parseInt(input2.value)
    document.getElementById("result").value= result
    input1.value=""
    input2.value=""
})
document.getElementById("DIV").addEventListener("click",(event)=>{
    const result= parseInt(input1.value) / parseInt(input2.value)
    document.getElementById("result").value= result
    input1.value=""
    input2.value=""
})
document.getElementById("show-menu").addEventListener("click",(event)=>{
    document.getElementById("show-menu").style.display="none"
    document.getElementById("close-menu").style.display="block"
    document.getElementById("auth-panel").style.display="block"

})
document.getElementById("close-menu").addEventListener("click",(event)=>{
    console.log(1)
    document.getElementById("show-menu").style.display="block"
    document.getElementById("close-menu").style.display="none"
    document.getElementById("auth-panel").style.display="none"

})


