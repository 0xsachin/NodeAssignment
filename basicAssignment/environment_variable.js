//******************** 1. Using process.env Object *************************  num1=239482 num2=321312 node environment_variable.js
//var num1=process.env.num1; 
//var num2=process.env.num2; 

//console.log("num1-->",num1)	//239482
//console.log("num2-->",num2)	//321312



//******************** 2. Using configuration file *************************  node --env-file=.env environment_variable.js


//var num1=process.env.num1;
//console.log("num1-->",num1)	//100



//******************** 3. Command line argumane *************************  node environment_variable.js 10 20
var arguments = process.argv
 
function add(a, b) {
    // To extract number from string
    return parseInt(a)+parseInt(b) 
}
var sum = add(arguments[2], arguments[3])
console.log("Addition is ", sum)
