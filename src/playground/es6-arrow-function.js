// const square = function (x){
// return x *x;
// };

// const squareArrow = (x) => {
//     return x *x;
//     };

// //expresion syntax
// const squareArrow = (x) => x * x; //when only one argument no need to wrap in {} and write return. 

// console.log(square(8));
// console.log(squareArrow(8));

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };

// console.log(getFirstName('Andrew Miller'));

// const exprGetFirstName = (fullName) => fullName.split(' ')[0];

// console.log(exprGetFirstName('Jen Smith'));

const multiplier ={
    //numbers - array of numbers
    numberArray: [1,2,3],
    //myltiplyBy - single number
    multiplyBy: 2,

    //multiply - return a new array where the number have been muliplied (use map)
    multiply(){
        return this.numberArray.map((result) => this.multiplyBy * result);
    }
};

console.log(multiplier.multiply()); //[1,2,3] 2 [2,4,6]

