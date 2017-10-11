
class Person {
  constructor(name = 'Anonymous', age = 0){
    this.name = name ;
    this.age = age;
  }
  getGreeting() {
    //return 'Hi. I am ' + this.name + '!';
    return `Hi. I am ${this.name} !`;
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`;
  }
}
//how to use Person items within Student
class Student extends Person{
  constructor( name, age, major){
    //super is internal method used to call parent constructor
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    //using double !! will return either true or faluse value. 
    return !!this.major;
  }
  getDescription(){
    //using super in the below will be like calling getDescription from parent
    let description = super.getDescription();
    //this checks to see if there is a major and then adds the major to the end.
    if (this.hasMajor()){
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

//new subclass of person 

class Travler extends Person{
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHome(){
    return !!this.homeLocation;
  }
  getGreeting(){
    let greeting = super.getGreeting();
    if(this.hasHome()){
      greeting += ` I'm visiting from ${this.homeLocation}`
    }
    return greeting;
  }
}

const me = new Travler('Andrew Miller', 42, 'Oakland');

console.log(me.getGreeting());

const other = new Travler();
console.log(other.getGreeting());