let number=-1

if(number<=0){
    console.log("Please enter a number greater than zero");

}
else if(number ==1){
    console.log(`Factorial of ${number}  is 1`);
}
else{
    let fact=1
    for(i=1;i<=number;i++){
        fact*=i

    }
    console.log(`Factorial of ${number} is ${fact}`);
}