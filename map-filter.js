const numbers = [3,7,8,9,2,4];
// const output = [];
// for (let i = 0; i< numbers.length; i++) {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }
// console.log(output);

// function square (elements){
//     return elements*elements;
// }
// const square = elements=>elements*elements;
// const square = x => x*x;

// const result = numbers.map(function(elements){
//     return elements*elements;
// // })

// const result = numbers.map(x => x*x );
// console.log(result);

const bigger = numbers.filter(x => x>4);
//console.log (bigger);
const unique = numbers.find ( x => x>5);
console.log(unique);