// sum of all numbers upto n
// base case for n=1 , return n

function sum(n){
    if(n ===1){
        return n
    }
    return n + sum(n-1);
}

console.log("sum ",sum(10)) //55