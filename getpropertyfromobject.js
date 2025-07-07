function getProperty(obj, property) {
  
    if (property in obj) {
        return obj[property];
    } else {
        return undefined; 
    }
}


const a=getProperty({ name: "Bob", age: 30 }, "name");
console.log(a); 