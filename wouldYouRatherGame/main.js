// Question will be fetched from firebase
class Question {
	constructor(question, value) {
		this.question = question;
		this.value = value;
	}
}
// TODO: Review Firebase Auth for javascript
class Player {
	constructor(name, id, score) {
		this.name = name;
		this.id = id;
		this.score = score;
	}
}
const wouldYouRatherQuestions = [
	"Would you rather have the ability to fly or be invisible at will?",
	"Would you rather travel back in time to meet your ancestors or forward in time to meet your descendants?",
	"Would you rather live in a world without internet or without electricity?",
	"Would you rather have the power to instantly learn any language or be a master of every musical instrument?",
	"Would you rather have the ability to speak with animals or understand and speak any human language?",
	"Would you rather be a famous celebrity with no privacy or a regular person with complete anonymity?",
	"Would you rather live in a treehouse in a remote forest or a houseboat on a tranquil lake?",
	"Would you rather be able to teleport anywhere in the world or read minds?",
	"Would you rather have the power to heal any physical injury or heal any emotional pain?",
	"Would you rather be stranded on a deserted island alone or with someone you can't stand?",
];
function createQuestion(question) {
	newQuestion = new Question(question, 10);
	console.log(newQuestion);
	displayQuestion(newQuestion);
}
function displayQuestion(someQuestion) {
	output = document.getElementById("output");
	questionP = document.createElement("p");
	questionP.textContent = someQuestion.question;
	output.appendChild(questionP);
	getChoices(someQuestion);
}
function getChoices(currentQuestion) {
	slicedQuestion = currentQuestion.question.replace("Would you rather ", "");
	choiceArray = slicedQuestion.split(" or ");
	console.log(choiceArray);
	displayChoices(choiceArray);
}
function displayChoices(choices) {
	for (choice in choices) {
		const choiceOutput = document.getElementById(`choice${choice}`);
        choiceOutput.className = "options";
		choiceOutput.textContent = choices[choice];
        choiceOutput.addEventListener("click",choiceMade)
	}
}
function choiceMade(){
    console.log(this.id);
}
createQuestion(wouldYouRatherQuestions[Math.floor(Math.random() * 10)]);
