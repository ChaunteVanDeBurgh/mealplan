'use strict';

var tempSave = {
	meat: [],
	vegetable: [],
	carbohydrate: []
};

var addText = function addText(dish) {
	var dishIn = dish + '-input';
	var dishOut = dish + '-list';
	var userInput = document.getElementById(dishIn).value;

	var listNode = document.createElement('li');
	var textNode = document.createTextNode(userInput);
	listNode.appendChild(textNode);
	document.getElementById(dishOut).appendChild(listNode);
	tempSave[dish].push(userInput);
	console.log(tempSave);
};

var generateMeal = function generateMeal() {
	var numMeat = Math.floor(Math.random() * tempSave.meat.length);
	var numVeg = Math.floor(Math.random() * tempSave.vegetable.length);
	var numCarb = Math.floor(Math.random() * tempSave.carbohydrate.length);
	var meatChoice = tempSave.meat[numMeat];
	var vegChoice = tempSave.vegetable[numVeg];
	var carbChoice = tempSave.carbohydrate[numCarb];
	var meal = meatChoice + ' ' + vegChoice + ' ' + carbChoice;
	var listNode = document.createElement('li');
	var textNode = document.createTextNode(meal);
	listNode.appendChild(textNode);
	document.getElementById('meal-display').appendChild(listNode);
	console.log(meal);
};