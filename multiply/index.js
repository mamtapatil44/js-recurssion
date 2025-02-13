const multiply =(a)=>{
   
        return function(b){
            if(b){
            return multiply(a*b)
        }
        else{
            return a
        }
    }
    
    
}

console.log("mul ",multiply(1)(2)(3)(4)(6)())


const sum =(a)=>{
   
    return function(b){
        if(b){
        return sum(a+b)
    }
    else{
        return a
    }
}


}

console.log("sum ",sum(1)(2)(3)(4)(6)())