
let student = {
    name: "Mamta",
    address: {
      street: "Wakad road",
      city: "Pune",
      contact: {
        personal: "890789876",
        office: "9999999999",
      },
    },
  };
  

  function printNestedObj(obj){

    for(let key in obj){
        if(typeof obj[key] === 'object' && obj[key] !== null){
            console.log(key + ": {")
            printNestedObj(obj[key])
            console.log(" }")
        } else{
            console.log(`${key}: ${obj[key]}`)
        }

    }

  }

  printNestedObj(student)
