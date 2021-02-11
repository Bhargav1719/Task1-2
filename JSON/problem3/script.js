
function toArray(obj) {
    return Object.keys(obj).map(e => [e, obj[e]])
  }
  


  var object = {name: "ISRO", age: 35, role: "Scientist"};

  console.log(toArray(object))