console.log("-------------------------------------------");
console.log("ПЕРВОЕ: ");

let numbers1 = [5,6,7,8,9];
let numbers2 = [1,2,3,4,];
let numbers3 = [...numbers2, ...numbers1]
console.log(numbers3);

console.log("-------------------------------------------");
console.log("ВТОРОЕ: ");

let student = {
    name: "Жорик брат",
    age: 20,
    group: "РК 26-1",
    grades: [5,4,5,3,5,4,2,3,4,3,],
}
let {
    name,
    age,
    group,
    grades,
} = student;
console.log(name);
console.log(age);
console.log(group);
console.log(grades);

console.log("-------------------------------------------");
console.log("ТРЕТИЕ: ");

let newStudent = {...student}
console.log(newStudent);

console.log("-------------------------------------------");
console.log("ЧЕТВЕРТОЕ: ");

function test (...numbers){
     let sum = 0;
    for( let i =0; i<numbers.length; i++){
        sum+=numbers[i]
    }
    let result = sum/numbers.length;
    return result;
}
console.log(test(4,5,6,4,4,2));

console.log("-------------------------------------------");