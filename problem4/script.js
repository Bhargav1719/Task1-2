
var array = ["GUVI", "I", "am", "Geek"];
function transformFirstAndLast(arr) {
 newObject={}
    newObject[arr[0]]=arr[arr.length-1]
    return newObject;
   }
   console.log(transformFirstAndLast(array))