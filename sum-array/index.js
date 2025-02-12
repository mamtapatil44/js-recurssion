// for sum of array elements base case should be if length ==0 , return 0


function arraySum(arr){
    if(arr.length === 0) return 0;

    return arr[0] + arraySum(arr.slice(1))
}

console.log("resulti " ,arraySum([10, 20, 30, 40, 50]))