let numbers = [1,1,1]; 
let result = numbers.map((number)=>number*3);
console.log(result);

let numbers1 = [10,20,9,80,7,1];
let result1 = numbers1.filter((number1)=>number1>10)
console.log(result1);

let numbers3 = [10,20,9,80,7,1];
let result3 = numbers3.reduce((total, number3)=> total+number3, 0);
console.log(result3);
console.log(result3/numbers3.length);

let studets = [
    {
    name: "Кирилл",
    age: 17,
    group: "ИСП25-23",
    grades: 5,
},
    {
    name: "Игорь",
    age: 16,
    group: "ИСП25-23",
    grades: 2,
},
    {
    name: "Саша",
    age: 18,
    group: "ИСП25-23",
    grades: 3,
},
 {
    name: "Кирилл",
    age: 21,
    group: "ИСП25-23",
    grades: 5,
},
    {
    name: "Роман",
    age: 20,
    group: "ИСП25-23",
    grades:5,
}]

let resultName = studets.map((student)=>student.name)
console.log(resultName);

let resultGrade = studets.filter((student)=>student.grades === 5)
console.log(resultGrade);

let resultSum = studets.map((student)=> student.grades)
let sum = resultSum.reduce((total, num)=>total+num,0)
console.log(sum);

let find = studets.find((student)=>student.name === "Роман")
console.log(find);