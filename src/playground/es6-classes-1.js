
class Person {
  constructor(name = 'Anonymous', age = 0){
    this.name = name ;
    this.age = age;
  }
  getGretting() {
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
    return !!this.major;
  }
  getDescription(){
    let;
  }
}

const me = new Student('Andrew Miller', 42, 'Computer Sicence');

console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());