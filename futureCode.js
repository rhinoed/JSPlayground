function displayOutput() {
	const output = document.getElementById("output");
	const newParagraph = document.createElement("p");
	const outputLabels = [
		"Your household size input was:",
		"Your home size input was:",
		"Your household points are:",
		"Your home size points are:",
		"Your total carbon footprint is:",
	];
	
	// week 5 refactor to standard for loop (outer loop) && to use objects
	for (object of cfpData) {
		// counter for inner loop
		let j = 0
		const result_list = document.createElement("ul");
		result_list.className = "result_list";
		// week 5 refactor to standard for loop (inner loop)
		for (key in object ) {
			const listItem = document.createElement("li");
			console.log(key)
			if (key == "cfpTotal"){
				listItem.textContent = `${outputLabels[j]} ${object.cfpTotal()}`;
			}else if(key == "shouldDisplay" || key == "inTheGreen"){
				console.log(object.inTheGreen())
			}else{
				listItem.textContent = `${outputLabels[j]} ${object[key]}`;
			}
			result_list.appendChild(listItem);
			j++;
		}
		newParagraph.appendChild(result_list);
	}
	// used replaceChildren because I call displayOut everytime start is called
	output.replaceChildren(newParagraph);
}

function cfpObjConstrutor(){
	// object properties
	//this.user = "John"
	this.household = document.querySelector("#household").value;
	this.homeSize = document.querySelector("#homeSize").value;
	this.householdPts = calculateCFHouseholdPts(this.household);
	this.homeSizePts = calculateCFHomeSizePts(this.homeSize);

	// object methods
	this.cfpTotal = function(){
		return this.householdPts + this.homeSizePts
	}
	this.shouldDisplay = function(){
		
		if (this.household == "" || this.homeSize == ""){
			return false;
		}else{
			return true;
		}

	}
	this.inTheGreen = function(){
		if (this.cfpTotal() <= 60){
			return true;
		}else{
			return false;
		}
	}
}

function prepareToStart() {
	const totalCFHeading = document.querySelector("#totalCF");
	const cfpObj = new cfpObjConstrutor();

	// added this so result only update when both inputs have a value
	if (cfpObj.shouldDisplay()) {
		cfpData.unshift(cfpObj);
		displayOutput();
		totalCFHeading.textContent = "";
	} else if (cfpObj.household == "" || cfpObj.homSize == "") {
		totalCFHeading.textContent = `Make selection for both to see results below your score so far is ${totalCFPts}`;
	} else {
		totalCFHeading.textContent =
			"Make selections to see how they effect your score";
	}
}