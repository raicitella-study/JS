let name = "Кирилл";
let age = 16;

console.log("Имя: " + name);

if (age>=18){
    console.log("Доступ разрешен!");
}else{
      console.log("Доступ запрещен!");
}

let student = {
    name: "Кирилл",
    age: 18,
    group: "ИСП25-23",
    grades: [2,3,4,4,5,5,5,5,5,],
}

 console.log("Имя студента: " + student.name + ", Группа: " + student.group);

 let sum = 0;

 console.log("---")

for( let i =0; i<student.grades.length; i++){

    console.log(student.grades[i])
    sum+=student.grades[i]

}
console.log("---")

let grade = sum/student.grades.length;

console.log("Средний балл: " + grade)
if(grade > 4){
    console.log("Оценка не меньше 4");
}else{
    console.log("Оценка меньше 4");
}