const addText = (dish) => {
	const dishIn = dish + '-input';
	const dishOut = dish + '-list';
	userInput = document.getElementById(dishIn).value;
	document.getElementById(dishOut).innerHTML = userInput;
}