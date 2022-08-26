let temp="60c"
let a=temp.slice(-1)
t=temp.slice(0,-1)
let c=" "
if(a=="F" || a=="f"){
    c=(5*(t-32)/9)
    console.log(`${temp} is ${c}C`)
}
else if(a=="C" || a=="c"){
    c=(32+(t*9)/5)
    console.log(`${temp} is ${c}F`)
}