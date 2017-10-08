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

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Andrew Miller'));

const exprGetFirstName = (fullName) => fullName.split(' ')[0];

console.log(exprGetFirstName('Jen Smith'));
