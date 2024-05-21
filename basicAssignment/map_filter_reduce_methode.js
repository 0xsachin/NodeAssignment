//******************** map methode exaple *************************
//1.

var numbers = [4, 9, 16, 25];
var newArr = numbers.map(Math.sqrt)
console.log("newArr-->",newArr)	//[ 2, 3, 4, 5 ]


//2.

var numbers = [1,2,4,5];
var newArr = numbers.map(myFunction);

function myFunction(num){
	return num > 2
}
console.log("newArr-->",newArr)	//[ false, false, true, true ]


//******************** filter methode exaple *************************

var ages = [32, 33, 16, 40];
var result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log("result-->",result)	//[ 32, 33, 40 ]



//******************** reduce methode exaple *************************

var numbers1 = [175,25,50];
var newArr = numbers1.reduce(myFunction);

function myFunction(acc,num){
console.log("acc-->",acc)		// 175 and 150
console.log("num-->",num)		// 25 and 50
	return acc - num;
}
console.log("newArr-->",newArr)	//100
