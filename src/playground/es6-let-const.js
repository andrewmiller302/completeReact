
//var can be over writin and redfined. Redfind would be to add another var in from on nameVar
var nameVar = 'Andrew';
var nameVar = 'Mike'; //redfind is valid 
nameVar = 'Mike'; //over write is valid
console.log('nameVar', nameVar);

//Let can be over writin but not redfined. If you add anohter let of the same name, you will get an error
let nameLet = 'Jen';
//let nameLet = 'Julie'; //redfind not valid 
nameLet = 'Julie'; //over write is valid
console.log('nameLet', nameLet)

//const Can't be redfind or over writin 
const nameConst = 'Frank';
//const nameConst = 'Gunther'; //Can't be redfind
//nameConst = 'Tom'; //Can't be over writin
console.log('nameConst', nameConst);

//Scope
function getPetName(){
    var getPetName = 'Hal';
    return petName
}

//getPetName(); //Can access by calling the function and asinging to let or const
//console.log(petName); //Can't access becasue not in gloable scop
//this is the same as const & let 

//Block level scoping

var fullName = 'Andrew Miller';

if (fullName){
    let firstName = fullName.split(' ')[0];
    console.log(firstName); //retuns first name
}

console.log(firstName); //retuns error becasue firstName is only avalbe within if statment. 