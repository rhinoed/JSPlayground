/*
CIT 93
Mark Edmunds
August 19, 2023  
w3 CF Household and Functions
 */

/*
note:
There are a lot of changes to this code from the code that was in the code along.
I made these changes with the idea that in calculator webpages there are HTML elements used for input.
So I added the code to accept user input and respond to changes.
I also made changes to the code which I think helps improve it's modularity and adaptability.
*/

// functions
// this fuction is call easch time the user changes their selection
function calculateCarbonFootprintPts(numberInHoushold, sizeOfHome) {
	return (
		calculateCFHouseholdPts(numberInHoushold) +
		calculateCFHomeSizePts(sizeOfHome)
	);
}

/*
note:
I am using return statements instead of changing the value of a varible.
Functions can both accept arguments and return values.
And by saying return 14; for example the reult of calling the function is 14
*/
function calculateCFHouseholdPts(numberInHoushold) {
	if (numberInHoushold == 1) {
		return 14;
	} else if (numberInHoushold == 2) {
		return 12;
	} else if (numberInHoushold == 3) {
		return 10;
	} else if (numberInHoushold == 4) {
		return 8;
	} else if (numberInHoushold == 5) {
		return 6;
	} else if (numberInHoushold == 6) {
		return 4;
	} else if (numberInHoushold > 6) {
		return 2;
	} else {
		// only condition left is household is zero
		console.log("no update to points household is empty");
		return 0;
	}
	// This will never print because it is after the return statement
	console.log(
		`Given the number in household ${numberInHoushold} the carbon footprint score is ${carbonFooprintPoints}`
	);
}
// like the above this function just returns a vaule that is used in the calculateCarbonFootprintPts function.
function calculateCFHomeSizePts(sizeOfHome) {
	switch (sizeOfHome) {
		case "large":
			return 10;
		case "medium":
			return 7;
		case "small":
			return 4;
		case "apartment":
			return 2;
		default:
			console.log("no update to points home size not selected");
			return 0;
	}
}

// global scope

// create reference to HTML elements
/* 
note: 
I am most familar with using document.getElementById. 
But using the MDN docs I was able to find a way to use querySelector
*/
const housholdSelector = document.querySelector("#household");
const homeSizeSelector = document.querySelector("#homeSize");
const totalCFHeading = document.querySelector("#totalCF");
const initialCFHeading = document.querySelector("h2").textContent;

// create reference to anonymous functions used in addEventListener method calls

// DOM manipulation
//I have made separate functions for each DOM element update
// changes the household span text content
function householdSelectorChanged() {
	const householdPts = calculateCFHouseholdPts(this.value);
	if (householdPts != 0) {
		document.querySelector(
			"#householdPts"
		).textContent = ` ${householdPts} Pts added to your total`;
	} else {
		document.querySelector("#householdPts").textContent = null;
	}
	updateCFTotal();
}
// changes the homeSize span text content
function homeSizeSelectorChanged() {
	const homeSizePts = calculateCFHomeSizePts(this.value);
	if (homeSizePts != 0) {
		document.querySelector(
			"#homeSizePts"
		).textContent = ` ${homeSizePts} Pts added to your total`;
	} else {
		document.querySelector("#homeSizePts").textContent = null;
	}
	updateCFTotal();
}
// changes the totalCF h2 text content
function updateCFTotal() {
	const homeholdSelectorValue = document.querySelector("#household").value;
	const homeSizeSelectorValue = document.querySelector("#homeSize").value;
	const totalCFPts = calculateCarbonFootprintPts(
		homeholdSelectorValue,
		homeSizeSelectorValue
	);

	if (totalCFPts != 0) {
		totalCFHeading.textContent = ` Your Carbon Footprint is ${totalCFPts} pts.`;
	} else {
		totalCFHeading.textContent = initialCFHeading;
	}
}
//create event listeners passing the references to anonymous functions which are executed when changes are made to these elements
housholdSelector.addEventListener("change", householdSelectorChanged, false);
homeSizeSelector.addEventListener("change", homeSizeSelectorChanged, false);
