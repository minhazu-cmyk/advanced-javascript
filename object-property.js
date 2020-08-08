const student = [
    {id:25, name: "manna"},
    {id:65, name: "dipjol"},
    {id:75, name: "moyori"},
];
// const outside =[];

// for (let i = 0; i < student.length; i++) {
//     const element = student [i];
//     const result = element.name;
//     outside.push(result);
// }
// console.log(outside);
//const names = student.map(x=>x.name);
//console.log(names);
const ids = student.map(s=> s.id);
const bigger = student.filter(s=> s.id>25);
console.log(bigger);