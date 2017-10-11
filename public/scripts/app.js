'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: 'getGreeting',
    value: function getGreeting() {
      //return 'Hi. I am ' + this.name + '!';
      return 'Hi. I am ' + this.name + ' !';
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      return this.name + ' is ' + this.age + ' year(s) old.';
    }
  }]);

  return Person;
}();
//how to use Person items within Student


var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student(name, age, major) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));
    //super is internal method used to call parent constructor


    _this.major = major;
    return _this;
  }

  _createClass(Student, [{
    key: 'hasMajor',
    value: function hasMajor() {
      //using double !! will return either true or faluse value. 
      return !!this.major;
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      //using super in the below will be like calling getDescription from parent
      var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);
      //this checks to see if there is a major and then adds the major to the end.
      if (this.hasMajor()) {
        description += ' Their major is ' + this.major + '.';
      }
      return description;
    }
  }]);

  return Student;
}(Person);

//new subclass of person 

var Travler = function (_Person2) {
  _inherits(Travler, _Person2);

  function Travler(name, age, homeLocation) {
    _classCallCheck(this, Travler);

    var _this2 = _possibleConstructorReturn(this, (Travler.__proto__ || Object.getPrototypeOf(Travler)).call(this, name, age));

    _this2.homeLocation = homeLocation;
    return _this2;
  }

  _createClass(Travler, [{
    key: 'hasHome',
    value: function hasHome() {
      return !!this.homeLocation;
    }
  }, {
    key: 'getGreeting',
    value: function getGreeting() {
      var greeting = _get(Travler.prototype.__proto__ || Object.getPrototypeOf(Travler.prototype), 'getGreeting', this).call(this);
      if (this.hasHome()) {
        greeting += ' I\'m visiting from ' + this.homeLocation;
      }
      return greeting;
    }
  }]);

  return Travler;
}(Person);

var me = new Travler('Andrew Miller', 42, 'Oakland');

console.log(me.getGreeting());

var other = new Travler();
console.log(other.getGreeting());
