// revesrse string
// base case : str = '';
function recursionreveseStr(str){
    if(str === ''){
      return str;
    }

    return recursionreveseStr(str.substring(1))+ str[0];

}

console.log('str ',recursionreveseStr("Mamta"))


function recursionreveseArr(arr){
    if(arr.length ===0){
      return [];
    }

    return recursionreveseArr(arr.slice(1)).concat(arr[0]);

}

console.log('r arr ',recursionreveseArr([3,4,5,6,7]))