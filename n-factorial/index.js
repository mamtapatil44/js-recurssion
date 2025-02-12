//  factorial is product of all integer num upto or less than numbers
// base case: 0!: 1 so n=0

function factorial(n){
    if( n ===0) return 1

    return n* factorial(n-1);
}
console.log("factorail" ,factorial(5))