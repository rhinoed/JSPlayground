// CIT 93
// Mark Edmunds
// August 30, 2023  
// w4 CF Intron To Iteration

// top-level const
const cfpData = [];
// functions
// this fuction is call easch time the user changes their selection
function calculateCarbonFootprintPts(numberInHoushold, sizeOfHome) {
	return (
		calculateCFHouseholdPts(numberInHoushold) +
		calculateCFHomeSizePts(sizeOfHome)
	);
}


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
// This updates the points the points shown next to the input boxes.
function householdSelectorChanged() {

	const householdPts = calculateCFHouseholdPts(this.value);
	console.log(
		`based on your selection your household size points are ${householdPts}`
	);
	if (householdPts != 0) {
		document.querySelector(
			"#householdPts"
		).textContent = ` ${householdPts} Pts added to your total`;
	} else {
		document.querySelector("#householdPts").textContent = null;
	}
	prepareToStart();
}
// changes the homeSize span text content
function homeSizeSelectorChanged() {

	const homeSizePts = calculateCFHomeSizePts(this.value);
	console.log(
		`based on your selection your home size points are ${homeSizePts}`
	);
	if (homeSizePts != 0) {
		document.querySelector(
			"#homeSizePts"
		).textContent = ` ${homeSizePts} Pts added to your total`;
	} else {
		document.querySelector("#homeSizePts").textContent = null;
	}

	prepareToStart();
}
function prepareToStart() {
	const totalCFHeading = document.querySelector("#totalCF");
	const householdSelectorValue = document.querySelector("#household").value;
	const homeSizeSelectorValue = document.querySelector("#homeSize").value;
	const totalCFPts = calculateCarbonFootprintPts(
		householdSelectorValue,
		homeSizeSelectorValue
	);
	// added this so result only update when both inputs have a value
	if (householdSelectorValue != "" && homeSizeSelectorValue != "") {
		const cfpResultObj = {
			"household": householdSelectorValue,
			"homeSize": homeSizeSelectorValue,
			"householdPts": calculateCFHouseholdPts(householdSelectorValue),
			"homeSizePts": calculateCFHomeSizePts(homeSizeSelectorValue),
			"total": calculateCarbonFootprintPts(householdSelectorValue,homeSizeSelectorValue)
			
		}
		cfpData.push(cfpResultObj);
		displayOutput();
		totalCFHeading.textContent = "";
	} else if (householdSelectorValue == "" || homeSizeSelectorValue == "") {
		totalCFHeading.textContent = `Make selection for both to see results below your score so far is ${totalCFPts}`;
	}else{
		totalCFHeading.textContent = "Make selections to see how they effect your score";
	}
	
}

// DOM manipulation
function addListener(element, event, func) {
	//create event listeners passing the functions which are executed when changes are made to these elements
	element.addEventListener(event, func);
}

// function start(numInHousehold, sizeOfHome) {
// 	// creating for week 4 code along - arrays
	
// 	//const householdPts = calculateCFHouseholdPts(numInHousehold);
// 	//const homeSizePts = calculateCFHomeSizePts(sizeOfHome);
// 	//const total = calculateCarbonFootprintPts(numInHousehold, sizeOfHome);
// 	// used unshift instead of push so the newest array appears first
// 	const cfpResultObj = {
//     "household": numInHousehold,
//     "homeSize": sizeOfHome,
//     "householdPts": calculateCFHouseholdPts(numInHousehold),
//     "homeSizePts": calculateCFHomeSizePts(sizeOfHome),
//     "total": function(){return this.householdPts + this.homeSizePts}
// }
// 	cfpData.push(cfpResultObj);
// 	displayOutput();
// }

function displayOutput() {
	const output = document.getElementById("output");
	const newParagraph = document.createElement("p");
	const outputLabels = [
		"household input",
		"home size input",
		"household points",
		"home size point",
		"Total Carbon Footprint",
	];
	const ouputStrings = [];
	console.log(cfpData);
	for (array of cfpData) {
		// console.log(obj.total());
		// const newParagraph = document.createElement("p");
		// const resultHeader = document.createElement("h3");
		// resultHeader.textContent = `Based on Ypour Selections of ${obj.household} members in household & ${obj.homeSize} for size of home`;
		// const totalHeader = document.createElement("h3");
		// totalHeader.textContent = `Your points are ${obj.householdPts} household Pts, ${obj.homeSizePts} home size Pts, for a total of ${obj.total()}`;
		// newParagraph.appendChild(resultHeader);
		// newParagraph.appendChild(totalHeader);
		// output.appendChild(newParagraph);
		console.log(array);
		const result_list = document.createElement("table");
		result_list.className = "result_list";
	
		for (index in array) {
			console.log(index);
			const dataRow = document.createElement("tr");
			const rowData1 = document.createElement("td");
			const rowData2 = document.createElement("td");
			//const listItem = document.createElement("li");
			rowData1.textContent = `${outputLabels[index]}`
			rowData2.textContent = `${array[index]}`
			dataRow.appendChild(rowData1);
			dataRow.appendChild(rowData2);
			result_list.appendChild(dataRow);
			//listItem.textContent = `${outputLabels[index]} ${array[index]}`;
			//result_list.appendChild(listItem);
		}
		newParagraph.appendChild(result_list)
	}
	// used replaceChildren because I call displayOut everytime start is called
	output.replaceChildren(newParagraph);
}
// add event listener
addListener(
	document.querySelector("#household"),
	"change",
	householdSelectorChanged
);
addListener(
	document.querySelector("#homeSize"),
	"change",
	homeSizeSelectorChanged
);
// the first four calls to start more are made with user input
// start(4, "medium");
// start(4, "large");
// start(4, "small");
// start(4, "apartment"); // There are about 28 diffenent ways of calling this function which give unique results
