//деструктуризация

let studets = 
    {
    name: "Кирилл",
    age: 17,
    group: "ИСП25-23",
    grades: 5,
}
//деструктуризация объекта
let {
    name : name1,
    age,
    group,
    grades
} = studets;

console.log(name1);
console.log(studets.name);

let numbers = [10,20,50,6,44];
//деструктуризация массива
//разворачивание/spread
let [num1,num2,  ...остальные] = numbers;

console.log(num1);
console.log(остальные);

let numbers1 = [1,2,2,23,4,4];
//Собрать/rest
let numbers2 = [8, ...numbers1, 77];
console.log(numbers2);

