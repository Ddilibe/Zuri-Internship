let addition = (first, second) => (first + second);
let subtraction = (first, second) => (first - second);
let multiplication = (first, second) => (first * second);
let division = (first, second) => (first / second);

function start(){
	console.log (" Welcome to the calculator.\n Actions that can be taken here\
	 include addition (+), subtraction (-), multiplication (*) and division(\\) ")
	let first = prompt("Pls, Enter the first variable: ");
	let second = prompt("Pls, Enter the second variable: ");
	let op = prompt("Pls, Enter the the sign: ");

	switch (op) {
		case "+":
			console.log(addition(first, second));
			break;
		case "-":
			console.log(subtraction(first, second));
			break;
		case "*":
			console.log(multiplication(first, second));
			break;
		case "/":
			console.log(division(first, second));
			break;
		default:
			console.log("Wrong input, Pls try again.")
			start()
	}
}