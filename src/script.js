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

const generateMeal = () => {
	const numMeat = Math.floor(Math.random() * tempSave.meat.length);
	const numVeg = Math.floor(Math.random() * tempSave.vegetable.length);
	const numCarb = Math.floor(Math.random() * tempSave.carbohydrate.length);
	const meatChoice = tempSave.meat[numMeat];
	const vegChoice = tempSave.vegetable[numVeg];
	const carbChoice = tempSave.carbohydrate[numCarb];
	meal = meatChoice + ' ' + vegChoice + ' ' + carbChoice;
	const listNode = document.createElement('li');
	const textNode = document.createTextNode(meal);
	listNode.appendChild(textNode);
	document.getElementById('meal-display').appendChild(listNode);
	console.log(meal);
}