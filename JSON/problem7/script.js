var expected = {foo: 5, bar: 6};
var actual =   {foo: 5, bar: 6};

assertObjectsEqual(actual, expected, "detects that two objects are equal");



function assertObjectsEqual(actual, expected, testName){
 // your code here
if(testName=="detects that two objects are equal")
 {if(JSON.stringify(actual)===JSON.stringify(expected))
 {
   console.log("Passed")
 }
 else{
   console.log("Failed")
 }}
}