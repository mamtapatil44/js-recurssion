function print(n){
   
    console.log(n);
    if(n ===1) return 1;
    return print(n-1)
}
print(5)
