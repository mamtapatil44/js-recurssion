// fibonacie sequnece start from : 0,1 after this next element should be sum of revious two num
// 0,1,1,2,3,5....
// here are two base cases 
// n=0 retun 0 return 1 for n=1


function fibonacie(n){
    if( n===1 || n===0){
        return n
    }
    return  fibonacie(n-1) + fibonacie(n-2);

}

const result = fibonacie(6);
function printFibonacciSequence(n) {
    for (let i = 0; i <= n; i++) {
        console.log(fibonacie(i));  
    }
}
console.log("sequnce" ,printFibonacciSequence(6))