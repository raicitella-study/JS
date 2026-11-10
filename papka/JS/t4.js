let numbers = [10,10,3,5,2];

let sum = numbers.reduce(function(total, number){
    return total*number;
}, 1)
console.log(sum);

function square1(number){
   return number*number;
}
square1(5);
//стрелочная функция
const square = (number)=>{
    return number*number;
}
square(5);

let sum3 = numbers.reduce((total, number)=> total + number, 0);

let result10 = numbers.filter(number=>number%2===0).map(number => number * number).reduce((total, number)=> total+number, 0);

console.log(result10);