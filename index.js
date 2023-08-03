let firstName = "Reshe";
let lastName  =  " Assil";

let fullName = firstName + lastName;

console.log(fullName);

function sayHallo ()
{
	let say = "Hi there, " + firstName + "!";
	console.log(say);
}

sayHallo();

let myPoints = 3;

function add3Points()
{
	myPoints +=3;
}

function remove1Point()
{
	myPoints-=1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
console.log(myPoints);

//Strings vs Numbers :
//Try to predict what each of the lines will log out:
console.log("2" + 2);//22
console.log(11 + 7);//18
console.log(6 + "5");//65
console.log("My points: " + 5 + 9)//My points: 59
console.log(2 + 2);//4
console.log("11" + "14");//1114

// When the User clicks the purchase button, render out 
// "Something went wrong , please try again " in the paragraph
// that has the id = "errror ":


function purchase()
{
	console.log("Button Clicked");
	document.getElementById("error").textContent = "Something went wrong , please try again";
}
//set up a basic calculator :
let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let result;
// Get the reference to the <span> element by its ID
let sumEl = document.getElementById("sum-el");
// Option 1: Using textContent property to access the content of span
let content = sumEl.textContent;

function Add()
{
	result = num1 + num2;
	sumEl.textContent = content + result;
	
}

function Subtract()
{
	result = num1 - num2;
	document.getElementById("sum-el").innerText = content + result;
}

function Divide()
{
	result = num1 / num2;
	document.getElementById("sum-el").innerText = content + result;
}

function Multiply()
{
	result = num1 * num2;
	document.getElementById("sum-el").innerText = content + result;
}