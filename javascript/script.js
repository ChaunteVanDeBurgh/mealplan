const tempSave = {
	meat: [],
	vegetable: [],
	carbohydrate: []
}

const addText = (dish) => {
	const dishIn = dish + '-input';
	const dishOut = dish + '-list';
	userInput = document.getElementById(dishIn).value;

	const listNode = document.createElement('li');
	const textNode = document.createTextNode(userInput);
	listNode.appendChild(textNode);
	document.getElementById(dishOut).appendChild(listNode);
	tempSave[dish].push(userInput);
	console.log(tempSave);
}