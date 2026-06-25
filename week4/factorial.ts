//function to find the factorial value
function factorial(num:number):number{
    let result=1
    if (num<0){//throw an error if it is negative value
        throw new Error("The given number is negative")
    }
    else if (num==0){
        result=1
    }
    else{
        for(;num>0;num--){
            result=result*num
        }
    }
    return result
}
//call the function with various value with in try catche
try{
    console.log("factorial of 6: "+factorial(6))
    console.log("factorial of 0: "+factorial(0))
    factorial(-1)//throws error → jumps to catch immediately, so i kept this as last

}
catch(e){
    console.log((e as Error).message)
}
