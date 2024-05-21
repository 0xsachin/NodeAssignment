const express = require('express');
// const EventEmitter = require('node:events');
var events = require('events');
var fs = require("fs")  

const app = new express();
// const eventEmitter = new EventEmitter();
var eventEmitter = new events.EventEmitter();



app.listen(3000,callBack);

function callBack(request,response){
	console.log("Server is started")
}


//=============================== Route create ======================

// creating root route
app.get('/',callBackRoot)
function callBackRoot(request,response){
	console.log("root raute called");
	// response.json({"a":"a"})
}


// creating batch route
app.get('/batch',callBackBatch)
function callBackBatch(request,response){
	console.log("callBackBatch called");
	response.json({"a":"a"})
}

//=============================== EventEmitter ======================

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');		// why eventEmitter called first before server create??

//=============================== File Systme ======================


//Asynchronous read
fs.readFile('input.txt', function(err, data) {
    if (err) {  
       return console.error(err);  
   }  
   console.log("Asynchronous read: " + data.toString());  
 });

// Synchronous read  
var data = fs.readFileSync('input.txt');  
console.log("Synchronous read: " + data.toString());  
console.log("Program Ended");  


fs.writeFile('input.txt', 'Hello content written!', function (err) {
  if (err) throw err;
  console.log('writing data!');
});


//create file
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});