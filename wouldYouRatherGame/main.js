// Question will be fetched from firebase
class Question{
    constructor(question, value){
        this.question = question;
        this.value = value;
    }
}
// TODO: Review Firebase Auth for javascript
class Player{
    constructor(name,id, score){
        this.name = name;
        this.id = id;
        this.score = score;
    }
}